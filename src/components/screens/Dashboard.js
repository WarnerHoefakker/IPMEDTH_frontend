import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {getRooms} from '../../api/roomsAPI';
import RoomCard from '../RoomCard';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        getRooms().then((response) => {
           this.setState({rooms: response})
        });
    }

    render(){
        return (
            <View style={styles.dashboardScreen}>
                <ScrollView style={styles.scrollView} contentContainerStyle={{paddingTop: 60}}>
                    {this.state.rooms.map((room, index) => {
                        return (
                            <RoomCard roomName={room.roomName} roomId={room.roomId} key={index}></RoomCard>
                        );
                    })}
                </ScrollView>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 20,
    },
    dashboardScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EFEFEF',
    }
});

export default Dashboard
