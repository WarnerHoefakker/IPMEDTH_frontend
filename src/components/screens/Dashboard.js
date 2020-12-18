import React from 'react';
import {StyleSheet, View, ScrollView, Image, Text, AppState, TouchableHighlight, TouchableOpacity} from 'react-native';
import {getRooms} from '../../api/roomsAPI';
import RoomCard from '../RoomCard';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import RoomDetail from './RoomDetail';
import Navigation from '../NavigationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNEventSource from "react-native-event-source";
import Icon from 'react-native-vector-icons/Feather'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            shownRooms: [],
            showFilterOptions: false,
            levelFilter: [false, false, false, false],
            safetyFilter: [false, false, false],
            activeLevelFilters: [],
            activeSafetyFilters: [],
            currentLocation: null,
            currentRoomId: null,
            currentLocationStartTime: {},
            currentLocationSafetyLevel: '',
            elapsedTime: {},
        }
    }

    componentDidMount() {
        getRooms().then((response) => {
            this.setState({rooms: response})
            this.setState({shownRooms: response})

            this.addLocationEventListener();
        });
        this.dataUpdateInterval = setInterval(() => {
            this.getData();
        }, 5000);

    }

    componentWillUnmount() {
        clearInterval(this.dataUpdateInterval);

        this.eventSource.removeAllListeners()
    }

    addLocationEventListener = async () => {
        const GUID = await AsyncStorage.getItem('GUID')

        this.eventSource = new RNEventSource('http://192.168.178.123:3001/people/currentlocation/' + GUID); // TODO: env/variabele
        console.log("add eventlistener");

        this.eventSource.addEventListener('message', async (event) => {
            console.log(JSON.parse(event.data));
            const data = JSON.parse(event.data);
            if (data.loggedIn) {
                const dateLogin = new Date(data.startTime);
                const dayLogin = new Date(data.startTime);
                const dateToday = new Date();

                if (dayLogin.setHours(0, 0, 0, 0) == dateToday.setHours(0, 0, 0, 0)) {
                    this.setState({currentLocation: data.roomName});
                    this.setState({currentRoomId: data.roomId});

                    this.setState({
                        currentLocationStartTime: {
                            hours: dateLogin.getHours(),
                            minutes: dateLogin.getMinutes()
                        }
                    });

                    this.startTimer(dateLogin);
                    this.getSafetyLevelCurrentRoom(data.roomName)
                } else {
                    console.log(dateLogin, dateToday)
                }

            } else {
                this.setState({currentLocation: null});
                this.setState({currentRoomId: null});
                this.setState({currentLocationStartTime: {}});
                this.setState({elapsedTime: {}});

                this.stopTimer();

                console.log(this.state.currentLocation);
            }

        });
    };

    startTimer = () => {
        this.calculateTime();

        this.interval = this.interval ? this.interval : setInterval(() => {
            this.calculateTime()

        }, 60000);
    };

    stopTimer = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };

    getSafetyLevelCurrentRoom = (roomName) => {
        for (let i = 0; i < this.state.rooms.length; i++) {
            if (this.state.rooms[i].roomName === roomName) {
                console.log(this.state.rooms[i])
                this.setState({currentLocationSafetyLevel: this.state.rooms[i].safetyLevel})
            }
        }
    };

    calculateTime = () => { // TODO: controleren of het wel dezelfde dag is? Anders klopt dit niet
        const currentTime = new Date();

        let minutes = currentTime.getMinutes() - this.state.currentLocationStartTime.minutes;
        let hours = currentTime.getHours() - this.state.currentLocationStartTime.hours;

        if (minutes < 0) {
            minutes = 60 - minutes;
            hours -= 1;
        }

        this.setState({
            elapsedTime: {
                hours,
                minutes
            }
        });
    };

    getData() {
        if (AppState.currentState == 'active') {
            getRooms().then((response) => {
                this.setState({rooms: response})
                this.filterRooms();
            });
        }
    }

    showFilterOptions() {
        if (this.state.showFilterOptions) {
            this.setState({showFilterOptions: false});
        } else {
            this.setState({showFilterOptions: true});
        }
    }

    filterRooms() {
        if (this.state.activeLevelFilters.length == 0 && this.state.activeSafetyFilters.length == 0) {
            let roomsToBeShown = this.state.rooms;
            this.setState({shownRooms: roomsToBeShown})
        } else {
            let roomsToBeShown = [];

            this.state.rooms.forEach((room) => {
                if (this.state.activeLevelFilters.length != 0 && this.state.activeSafetyFilters.length == 0) {
                    if (this.state.activeLevelFilters.includes(room.levelId)) {
                        roomsToBeShown.push(room);
                    }
                } else if (this.state.activeLevelFilters.length == 0 && this.state.activeSafetyFilters.length != 0) {
                    if (this.state.activeSafetyFilters.includes(room.safetyLevel)) {
                        roomsToBeShown.push(room);
                    }
                } else if (this.state.activeLevelFilters.length != 0 && this.state.activeSafetyFilters.length != 0) {
                    if (this.state.activeLevelFilters.includes(room.levelId) && this.state.activeSafetyFilters.includes(room.safetyLevel)) {
                        roomsToBeShown.push(room);
                    }
                }
            });
            this.setState({shownRooms: roomsToBeShown});
        }
    }

    removeValueFromArray(array, value) {
        let index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array;
    }

    changeLevelFilterState(index, value) {
        let stateCopy = this.state.levelFilter;
        stateCopy[index] = value;
        this.setState({levelFilter: stateCopy})

        let activeLevelFiltersCopy = this.state.activeLevelFilters;
        if (value) {
            switch (index) {
                case 0:
                    activeLevelFiltersCopy.push('5fbfd84483e5dc31b48dbe9c');
                    break;
                case 1:
                    activeLevelFiltersCopy.push('5fbfd25a838fd0305b94fd74');
                    break;
                case 2:
                    activeLevelFiltersCopy.push('5fbfd84ccc39b531bb9fde4e');
                    break;
                case 3:
                    activeLevelFiltersCopy.push('5fbfd851a737b931c7a07714');
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd84483e5dc31b48dbe9c');
                    break;
                case 1:
                    activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd25a838fd0305b94fd74');
                    break;
                case 2:
                    activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd84ccc39b531bb9fde4e');
                    break;
                case 3:
                    activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd851a737b931c7a07714');
                    break;
            }
        }
        this.setState({activeLevelFilters: activeLevelFiltersCopy})
        this.filterRooms();
    }

    changeSafetyFilterState(index, value) {
        let stateCopy = this.state.safetyFilter;
        stateCopy[index] = value;
        this.setState({safetyFilter: stateCopy})

        let activeSafetyFiltersCopy = this.state.activeSafetyFilters;
        if (value) {
            switch (index) {
                case 0:
                    activeSafetyFiltersCopy.push('green');
                    break;
                case 1:
                    activeSafetyFiltersCopy.push('orange');
                    break;
                case 2:
                    activeSafetyFiltersCopy.push('red');
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'green');
                    break;
                case 1:
                    activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'orange');
                    break;
                case 2:
                    activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'red');
                    break;
            }
        }
        this.setState({activeSafetyFilters: activeSafetyFiltersCopy})
        this.filterRooms();
    }

    render() {
        return (
            <View style={styles.dashboardScreen}>
                {this.state.showFilterOptions && <View style={styles.filterOverlay}>
                    <View style={styles.filterOptionsContainer}>
                        <View style={styles.filterCancelButtonContainer}>
                            <TouchableHighlight style={styles.filterCancelButton} underlayColor="#2789b3"
                                                onPress={() => this.showFilterOptions()}>
                                <Image style={styles.filterIcon}
                                       source={require("../../../assets/img/close-icon.png")}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text style={styles.filterOptionsTitle}>Verdieping</Text>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[0]}
                                    onValueChange={(newValue) => {
                                        this.changeLevelFilterState(0, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>4</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[1]}
                                    onValueChange={(newValue) => {
                                        this.changeLevelFilterState(1, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>5</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[2]}
                                    onValueChange={(newValue) => {
                                        this.changeLevelFilterState(2, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>6</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[3]}
                                    onValueChange={(newValue) => {
                                        this.changeLevelFilterState(3, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>7</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.filterOptionsTitle}>Veiligheidsgraad</Text>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.safetyFilter[0]}
                                    onValueChange={(newValue) => {
                                        this.changeSafetyFilterState(0, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Goed</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.safetyFilter[1]}
                                    onValueChange={(newValue) => {
                                        this.changeSafetyFilterState(1, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Matig</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.safetyFilter[2]}
                                    onValueChange={(newValue) => {
                                        this.changeSafetyFilterState(2, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true: "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Slecht</Text>
                            </View>
                        </View>
                    </View>
                </View>}

                <View style={styles.filterButtonContainer}>
                    <TouchableHighlight style={styles.filterButton} underlayColor="#2789b3"
                                        onPress={() => this.showFilterOptions()}>
                        <Image style={styles.filterIcon} source={require("../../../assets/img/filter-icon.png")}/>
                    </TouchableHighlight>
                </View>

                {this.state.currentLocation !== null &&
                <TouchableOpacity style={styles.currentLocationBarTouch} onPress={() => {
                    console.log(this.state.currentRoomId)
                    this.props.navigation.navigate('RoomDetail', {roomId: this.state.currentRoomId})
                }}>
                    <View style={styles.currentLocationBar}>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem1]}>
                            <Icon name="log-in" size={25} color="#fff" style={styles.loginIcon}/>
                            <Text style={styles.currentLocationBarText}>{this.state.currentLocation}</Text>
                            <View
                                style={[styles.dashboardCardStatusIndicator, styles[this.state.currentLocationSafetyLevel]]}/>
                        </View>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem2]}>
                            <Text style={styles.currentLocationBarText}>Tijd:</Text>
                            <Text
                                style={styles.currentLocationBarText}>{String("0" + this.state.elapsedTime.hours).slice(-2) + ":" + String("0" + this.state.elapsedTime.minutes).slice(-2)}</Text>
                        </View>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem3]}>
                            <Text style={styles.currentLocationBarText}>Bekijk</Text>
                            <Icon name="chevron-right" size={25} color="#fff"/>
                        </View>

                    </View>
                </TouchableOpacity>
                }

                <ScrollView style={styles.scrollView} contentContainerStyle={{paddingTop: 60}}>
                    {this.state.shownRooms.length > 0 ? this.state.shownRooms.map((room) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RoomDetail', {
                                roomId: room.roomId
                            })}>
                                <RoomCard roomName={room.roomName} roomId={room.roomId} key={room.roomId} co2={room.co2}
                                          people={room.people} safetyLevel={room.safetyLevel}></RoomCard>
                            </TouchableWithoutFeedback>
                        );
                    }) : <Text>Er zijn geen ruimtes die voldoen aan deze criteria</Text>}
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 20,
        minWidth: '100%',
        minHeight: '100%'
    },
    dashboardScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EFEFEF',
    },
    filterButton: {
        width: 55,
        height: 55,
        backgroundColor: '#247BA0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterCancelButton: {
        width: 55,
        height: 55,
        backgroundColor: '#247BA0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterIcon: {
        width: 34,
        height: 34,
    },
    filterOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 20
    },
    filterButtonContainer: {
        zIndex: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    filterCancelButtonContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    filterOptionsContainer: {
        backgroundColor: '#fff',
        width: "100%",
        height: 500,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 20,
        paddingTop: 90
    },
    filterOptionsTitle: {
        fontSize: 24,
        marginBottom: 10
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    checkboxLabel: {
        marginLeft: 5,
        fontSize: 16
    },
    currentLocationBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    currentLocationBarTouch: {
        // zIndex: 5,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        backgroundColor: '#247BA0',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4
    },
    currentLocationBarItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    currentLocationBarItem1: {
        justifyContent: 'flex-start'
    },
    currentLocationBarItem2: {
        justifyContent: 'center'
    },
    currentLocationBarItem3: {
        justifyContent: 'flex-end'
    },
    currentLocationBarText: {
        color: '#fff',
        marginLeft: 4,
        marginRight: 4
    },
    loginIcon: {
        marginLeft: 4,
        marginRight: 4
    },
    dashboardCardStatusIndicator: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: 'grey',
        marginRight: 4,
        marginLeft: 4
    },
    green: {
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: '#fff'
    },
    orange: {
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: '#fff'
    },
    red: {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#fff'
    },
    grey: {
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: '#fff'
    }

});

export default Dashboard
