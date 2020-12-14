import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, SnapshotViewIOS} from 'react-native';
import RNEventSource from 'react-native-event-source';
import Gauge from './charts/Gauge';
import {API_URL} from '@env';
import {getRoomCurrentStatus} from '../api/testAPI';

class RoomCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <TouchableWithoutFeedback style={styles.dashboardCardContainer}>
                <View>
                    <View style={styles.dashboardCardNameContainer}>
                        <Text style={styles.dashboardCardName}>{this.props.roomName}</Text>
                        <View style={[styles.dashboardCardStatusIndicator, styles[this.props.safetyLevel]]}></View>
                    </View>
                    <View style={styles.dashboardCard}>
                        <View style={styles.dashboardGaugeNameContainer}>
                            <Text style={styles.dashboardGaugeName}>Bezetting</Text>
                            <Text style={styles.dashboardGaugeName}>Luchtkwaliteit</Text>
                        </View>
                        <View style={styles.dashboardGaugeContainer}>
                            <Gauge
                                color='green'
                                max={60}
                                value={this.props.people}
                            />
                            <Gauge
                                color='green'
                                max={1300}
                                value={this.props.co2}
                                showLabel={'text'}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
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

export default RoomCard