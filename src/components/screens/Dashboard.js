import React from 'react';
import {Animated, ActivityIndicator, StyleSheet, View, ScrollView, Image, Text, AppState, TouchableHighlight, TouchableOpacity} from 'react-native';
import {getRooms} from '../../api/roomsAPI';
import {getCurrentLocation} from '../../api/tagAPI';
import RoomCard from '../RoomCard';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import RoomDetail from './RoomDetail';
import Navigation from '../NavigationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather'
import globalStyles from "../../assets/style/globalStyle";

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
            amountOfFiltersActive: 0,
            currentLocation: {},
            pageLoading: true,
            slideAnim: new Animated.Value(-500),
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        getRooms().then((response) => {
            this.setState({rooms: response})
            this.setState({shownRooms: response})

            this.setState({pageLoading: false})
        });

        this.getCurrentRoom();

        this.dataUpdateInterval = setInterval(() => {
            this.getData();
        }, 5000);

    }

    componentWillUnmount() {
        clearInterval(this.dataUpdateInterval);
        this.state = {}
    }

    getCurrentRoom() {
        AsyncStorage.getItem('GUID').then((guid) => {
            getCurrentLocation(guid).then((response) => {
                this.setState({currentLocation: response})
            });
        })
    }

    getData() {
        if (AppState.currentState == 'active') {
            getRooms().then((response) => {
                this.setState({rooms: response})
                this.filterRooms();
            });
            this.getCurrentRoom();
        }
    }

    showFilterOptions() {
        if (this.state.showFilterOptions) {
            this.slideOut();
            this.fadeOut();
        } else {
            this.setState({showFilterOptions: true});
            this.slideIn();
            this.fadeIn();
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
                    if (this.state.activeLevelFilters.includes(room.levelId._id)) {
                        roomsToBeShown.push(room);
                    }
                } else if (this.state.activeLevelFilters.length == 0 && this.state.activeSafetyFilters.length != 0) {
                    if (this.state.activeSafetyFilters.includes(room.safetyLevel)) {
                        roomsToBeShown.push(room);
                    }
                } else if (this.state.activeLevelFilters.length != 0 && this.state.activeSafetyFilters.length != 0) {
                    if (this.state.activeLevelFilters.includes(room.levelId._id) && this.state.activeSafetyFilters.includes(room.safetyLevel)) {
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

        if(value){
            let updatedAmount = this.state.amountOfFiltersActive + 1;
            this.setState({amountOfFiltersActive: updatedAmount})
        } else {
            let updatedAmount = this.state.amountOfFiltersActive - 1;
            this.setState({amountOfFiltersActive: updatedAmount})
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

        if(value){
            let updatedAmount = this.state.amountOfFiltersActive + 1;
            this.setState({amountOfFiltersActive: updatedAmount})
        } else {
            let updatedAmount = this.state.amountOfFiltersActive - 1;
            this.setState({amountOfFiltersActive: updatedAmount})
        }
        this.setState({activeSafetyFilters: activeSafetyFiltersCopy})
        this.filterRooms();
    }

    slideIn = () => {
        Animated.timing(this.state.slideAnim, {
           toValue: 0,
           duration: 300,
           useNativeDriver: true, 
        }).start();
    }

    slideOut = () => {
        Animated.timing(this.state.slideAnim, {
           toValue: -500,
           duration: 300,
           useNativeDriver: true,
        }).start(({finished}) => {
            this.setState({showFilterOptions: false});
        });
    }

    fadeIn = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true, 
         }).start();
    }

    fadeOut = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true, 
         }).start();
    }

    render() {
        if(this.state.pageLoading) {
            return (
                <View style={[globalStyles.loadingContainer, globalStyles.loadingHorizontal]}>
                    <ActivityIndicator size="large" color="#247BA0"/>
                </View>
            )
        }

        return (
            <View style={styles.dashboardScreen}>
                {this.state.showFilterOptions && <Animated.View style={[styles.filterOverlay, {opacity: this.state.fadeAnim}]}>
                    <Animated.View style={[styles.filterOptionsContainer, {translateY: this.state.slideAnim}]}>
                        <View style={styles.filterCancelButtonContainer}>
                            <TouchableHighlight style={styles.filterCancelButton} underlayColor="#2789b3"
                                                onPress={() => this.showFilterOptions()}>
                                <Image style={styles.filterIcon}
                                       source={require("../../../assets/img/close-icon.png")}/>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.filterOptionsTitle}>Verdieping</Text>
                        <View style={styles.levelCheckboxWrapper}>
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
                        <Text style={styles.filterOptionsTitle}>Veiligheidsgraad</Text>
                        <View style={styles.safetyLevelCheckboxWrapper}>
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
                        <TouchableHighlight style={styles.filterSaveButton} underlayColor="#2789b3" onPress={() => this.showFilterOptions()}>
                            <Text style={styles.filterSaveButtonText}>Opslaan</Text>
                        </TouchableHighlight>
                    </Animated.View>
                </Animated.View>}

                <View style={styles.filterButtonContainer}>
                    <TouchableHighlight style={styles.filterButton} underlayColor="#2789b3" onPress={() => this.showFilterOptions()}>
                        <View>
                            <Image style={styles.filterIcon} source={require("../../../assets/img/filter-icon.png")}/>
                        </View>
                    </TouchableHighlight>
                                                                     
                    {this.state.amountOfFiltersActive > 0 && 
                    <View style={styles.filterIndicator}>
                        <Text style={styles.filterIndicatorText}>{this.state.amountOfFiltersActive}</Text>
                    </View>}
                </View>

                {this.state.currentLocation.loggedIn &&
                <TouchableOpacity style={styles.currentLocationBarTouch} onPress={() =>
                    this.props.navigation.navigate('RoomDetail', {
                        roomId: this.state.currentLocation.roomId,
                        roomName: this.state.currentLocation.roomName,
                        levelName: this.state.currentLocation.levelName
                    })
                }>
                    <View style={styles.currentLocationBar}>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem1]}>
                            <Icon name="log-in" size={25} color="#fff" style={styles.loginIcon}/>
                            <Text style={styles.currentLocationBarText}>{this.state.currentLocation.roomName}</Text>
                            <View style={[styles.dashboardCardStatusIndicator, styles[this.state.currentLocation.safetyLevel]]}/>
                        </View>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem2]}>
                            <Text style={styles.currentLocationBarText}>Tijd:</Text>
                            <Text style={styles.currentLocationBarText}>{String("0" + this.state.currentLocation.totalTime.hours).slice(-2) + ":" + String("0" + this.state.currentLocation.totalTime.minutes).slice(-2)}</Text>
                        </View>
                        <View style={[styles.currentLocationBarItem, styles.currentLocationBarItem3]}>
                            <Text style={styles.currentLocationBarText}>Bekijk</Text>
                            <Icon name="chevron-right" size={25} color="#fff"/>
                        </View>

                    </View>
                </TouchableOpacity>
                }

                <ScrollView style={styles.scrollView} contentContainerStyle={{paddingTop: 25}}>
                    {this.state.shownRooms.length > 0 ? this.state.shownRooms.map((room) => {
                        return (
                            <TouchableWithoutFeedback onPress= {() => this.props.navigation.navigate('RoomDetail', {
                                roomName: room.roomName,
                                roomId: room.roomId,
                                levelName: room.levelId.levelName
                            })}>
                                <RoomCard roomName={room.roomName} roomId={room.roomId} key={room.roomId} co2={room.co2} people={room.people} maxPeopleAmount={room.peopleAmount} safetyLevel={room.safetyLevel}></RoomCard>
                            </TouchableWithoutFeedback>
                        );
                    }) : <Text>Er zijn geen ruimtes die voldoen aan deze criteria</Text>}
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    dashboardScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EFEFEF',
        height: '100%'
    },
    scrollView: {
        paddingHorizontal: 20,
        minWidth: '100%',
        alignSelf: 'stretch',
    },
    filterButton: {
        width: 55,
        height: 55,
        backgroundColor: '#247BA0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterCancelButton: {
        width: 55,
        height: 55,
        backgroundColor: '#247BA0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterSaveButton: {
        backgroundColor: '#247BA0',
        color: '#fff',
        borderRadius: 5,
        width: 95,
        height: 45,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    filterSaveButtonText: {
        color: '#fff',
        fontWeight: "bold"
    },
    filterIcon: {
        width: 34,
        height: 34,
    },
    filterIndicator: {
        position: "absolute",
        bottom: 40,
        left: 35,
        backgroundColor: "red",
        borderRadius: 30,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    filterIndicatorText: {
        color: '#fff',
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
        paddingTop: 110
    },
    filterOptionsTitle: {
        fontSize: 24,
        marginBottom: 10
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginRight: 25,
        marginBottom: 5
    },
    checkboxLabel: {
        marginLeft: 5,
        fontSize: 16
    },
    levelCheckboxWrapper: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 5
    },
    safetyLevelCheckbox: {
        marginBottom: 5
    },
    currentLocationBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    currentLocationBarTouch: {
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
