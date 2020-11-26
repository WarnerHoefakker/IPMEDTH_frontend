import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Gauge from '../charts/Gauge';
import Navigation from '../NavigationBar';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }) {

    const dummy = {
        roomData: [
            {roomName: "Lc5001", peopleAmount: 30, co2Amount: 885},
            {roomName: "Lc5002", peopleAmount: 14, co2Amount: 569},
            {roomName: "Lc5003", peopleAmount: 40, co2Amount: 968},
            {roomName: "Lc5004", peopleAmount: 56, co2Amount: 1300},
            {roomName: "Lc5005", peopleAmount: 28, co2Amount: 997},
        ]
    }

    const allRoomsArray = dummy.roomData.map(room => {
        <View key={room.roomName} style={styles.dashboardCard}>
            <Text>{room.peopleAmount} people</Text>
        </View>
    })

    // TODO: systeemverzinnen die realistische veiligheidslevels genereerd, puntensysteem?
    const determineSafetyLevel = (room) => {
        if(room.peopleAmount < 20 && room.co2Amount <= 700){
            return styles.green
        } else if(room.peopleAmount <= 40 && room.co2Amount <= 1000){
            return styles.orange
        } else if(room.peopleAmount <= 60 && room.co2Amount <= 1300){
            return styles.red
        } else {
            return styles.grey
        }
    };

    return (
        <View style={styles.dashboardScreen}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{paddingTop: 60}}>
                {dummy.roomData.map(room => {
                    return (
                        <TouchableWithoutFeedback style={styles.dashboardCardContainer} onPress={() => navigation.navigate('RoomDetail')}>
                            <View style={styles.dashboardCardNameContainer}>
                                <Text style={styles.dashboardCardName}>{room.roomName}</Text>
                                <View style={[styles.dashboardCardStatusIndicator, determineSafetyLevel(room)]}>
        
                                </View>
                            </View>
                            <View key={room.roomName} style={styles.dashboardCard}>
                                <View style={styles.dashboardGaugeNameContainer}>
                                    <Text style={styles.dashboardGaugeName}>Bezetting</Text>
                                    <Text style={styles.dashboardGaugeName}>Luchtkwaliteit</Text>
                                </View>
                                <View style={styles.dashboardGaugeContainer}>
                                    <Gauge
                                        color='green'
                                        max={60}
                                        value={room.peopleAmount}
                                    />
                                    <Gauge
                                        color='green'
                                        max={100}
                                        value={room.peopleAmount}
                                        showLabel={'text'}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 20,
    },
    dashboardScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EFEFEF',
    },
    dashboardCardContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    dashboardCardNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
        width: 110,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 30,
        backgroundColor: '#fff',
        marginTop: 1
    },
    dashboardCardName: {
        color: '#545454'
    },
    dashboardCardStatusIndicator: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: 'grey',
        marginRight: 11,
        marginLeft: 11
    },
    dashboardGaugeNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dashboardGaugeName: {
        marginLeft: 50,
        marginRight: 35,
        color: '#545454'
    },
    dashboardGaugeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    dashboardCard: {
        display: 'flex',
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        marginBottom: 25,
        height: 155,
        paddingTop: 10
    },
    green: {
        backgroundColor: 'green'
    },
    orange: {
        backgroundColor: 'orange'
    },
    red: {
        backgroundColor: 'red'
    },
    grey: {
        backgroundColor: 'grey'
    }
});