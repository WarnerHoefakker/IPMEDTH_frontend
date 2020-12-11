import React from 'react';
import {StyleSheet, View, ScrollView, Image, Text, TouchableNativeFeedbackBase} from 'react-native';
import {getRooms} from '../../api/testAPI';
import RoomCard from '../RoomCard';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            showFilterOptions: false,
            levelFilter: [false, false, false, false],
            safetyFilter: [false, false, false],
            activeLevelFilters: [],
            activeSafetyFilters: [],
            shownRooms: [],
        }
    }

    componentDidMount() {
        getRooms().then((response) => {
            response.forEach((room) => {
                room['safetyLevel'] = 'grey'
            })
            this.setState({rooms: response})
            this.setState({shownRooms: response})
        });
    }

    showFilterOptions(){
        if(this.state.showFilterOptions){
            this.setState({showFilterOptions: false});
        } else {
            this.setState({showFilterOptions: true});
        }
    }

    filterRooms(){
        if(this.state.activeLevelFilters.length == 0 && this.state.activeSafetyFilters.length == 0){
            let roomsToBeShown = this.state.rooms;
            this.setState({shownRooms: roomsToBeShown})
        } else {
            let roomsToBeShown = [];

            this.state.rooms.forEach((room) => {
                if(this.state.activeLevelFilters.length != 0 && this.state.activeSafetyFilters.length == 0){
                    if(this.state.activeLevelFilters.includes(room.levelId)){
                        roomsToBeShown.push(room);
                    }
                } else if(this.state.activeLevelFilters.length == 0 && this.state.activeSafetyFilters.length != 0){
                    if(this.state.activeSafetyFilters.includes(room.safetyLevel)){
                        roomsToBeShown.push(room);
                    }
                } else if (this.state.activeLevelFilters.length != 0 && this.state.activeSafetyFilters.length != 0){
                    if(this.state.activeLevelFilters.includes(room.levelId) && this.state.activeSafetyFilters.includes(room.safetyLevel)){
                        roomsToBeShown.push(room);
                    }
                }
            });
            this.setState({shownRooms: roomsToBeShown});
        }
    }

    removeValueFromArray(array, value){
        let index = array.indexOf(value);
        if(index !== -1){
            array.splice(index, 1);
        }
        return array;
    }

    changeLevelFilterState(index, value){
        let stateCopy = this.state.levelFilter;
        stateCopy[index] = value;
        this.setState({levelFilter: stateCopy})
        
        let activeLevelFiltersCopy = this.state.activeLevelFilters;
        if(value){
            switch(index){
                case 0: activeLevelFiltersCopy.push('5fbfd84483e5dc31b48dbe9c'); break;
                case 1: activeLevelFiltersCopy.push('5fbfd25a838fd0305b94fd74'); break;
                case 2: activeLevelFiltersCopy.push('5fbfd84ccc39b531bb9fde4e'); break;
                case 3: activeLevelFiltersCopy.push('5fbfd851a737b931c7a07714'); break; 
            }
        } else {
            switch(index){
                case 0: activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd84483e5dc31b48dbe9c'); break;
                case 1: activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd25a838fd0305b94fd74'); break;
                case 2: activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd84ccc39b531bb9fde4e'); break;
                case 3: activeLevelFiltersCopy = this.removeValueFromArray(activeLevelFiltersCopy, '5fbfd851a737b931c7a07714'); break; 
            }
        }
        this.setState({activeLevelFilters: activeLevelFiltersCopy})
        this.filterRooms();
    }

    changeSafetyFilterState(index, value){
        let stateCopy = this.state.safetyFilter;
        stateCopy[index] = value;
        this.setState({safetyFilter: stateCopy})

        let activeSafetyFiltersCopy = this.state.activeSafetyFilters;
        if(value){
            switch(index){
                case 0: activeSafetyFiltersCopy.push('green'); break;
                case 1: activeSafetyFiltersCopy.push('orange'); break;
                case 2: activeSafetyFiltersCopy.push('red'); break;
            }
        } else {
            switch(index){
                case 0: activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'green'); break;
                case 1: activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'orange'); break;
                case 2: activeSafetyFiltersCopy = this.removeValueFromArray(activeSafetyFiltersCopy, 'red'); break;
            }
        }
        this.setState({activeSafetyFilters: activeSafetyFiltersCopy})
        this.filterRooms();
    }
    
    saveSafetyLevel = (roomId, safetyLevel) => {
        let copyOfRoomsState = this.state.rooms;
        for(let i= 0; i < copyOfRoomsState.length; i++){
            if(copyOfRoomsState[i].roomId == roomId){
                copyOfRoomsState[i].safetyLevel = safetyLevel;
            }
        }
        this.setState({rooms: copyOfRoomsState});
    }

    render(){
        return (
            <View style={styles.dashboardScreen}>
                {this.state.showFilterOptions && <View style={styles.filterOverlay}>
                    <View style={styles.filterOptionsContainer}>
                        <View style={styles.filterCancelButtonContainer}>
                            <TouchableHighlight style={styles.filterCancelButton} underlayColor="#2789b3" onPress={() => this.showFilterOptions()}>
                                <Image style={styles.filterIcon} source={require("../../../assets/img/close-icon.png")}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text style={styles.filterOptionsTitle}>Verdieping</Text>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[0]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeLevelFilterState(0, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>4</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[1]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeLevelFilterState(1, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>5</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[2]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeLevelFilterState(2, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>6</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.levelFilter[3]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeLevelFilterState(3, newValue);
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
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
                                        this.setState({shownRooms: []});
                                        this.changeSafetyFilterState(0, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Goed</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.safetyFilter[1]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeSafetyFilterState(1, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Matig</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.safetyFilter[2]}
                                    onValueChange={(newValue) => {
                                        this.setState({shownRooms: []});
                                        this.changeSafetyFilterState(2, newValue)
                                    }}
                                    onCheckColor='#848CD9'
                                    tintColors={{true : "#848CD9"}}
                                />
                                <Text style={styles.checkboxLabel}>Slecht</Text>
                            </View>
                        </View>
                    </View>
                </View>}
                <View style={styles.filterButtonContainer}>
                    <TouchableHighlight style={styles.filterButton} underlayColor="#2789b3" onPress={() => this.showFilterOptions()}>
                        <Image style={styles.filterIcon} source={require("../../../assets/img/filter-icon.png")}/>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollView} contentContainerStyle={{paddingTop: 60}}>
                    {this.state.shownRooms.length > 0 ? this.state.shownRooms.map((room, index) => {
                        return (
                            <RoomCard roomName={room.roomName} roomId={room.roomId} key={room.roomId} safetyLevel={this.saveSafetyLevel}></RoomCard>
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
    
});

export default Dashboard
