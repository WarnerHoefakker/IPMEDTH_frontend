import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import RNEventSource from 'react-native-event-source'
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";
import globalStyles from "../../assets/style/globalStyle";
import {API_URL} from '@env';

class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.color = 'purple';

        this.state = {
            co2Value: 0,
            pageLoading: true
        }
    }

    componentDidMount() {
        // const source = new RNEventSource(API_URL + '/rooms/LC4044/currentstatus');
        //
        // source.addEventListener('message', (event) => {
        //     let data = JSON.parse(event.data);
        //     this.setState({co2Value: data.co2.level})
        // });

        this.setState({pageLoading: false}) // TODO: als request om data op te halen voltooid
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
            <SafeAreaView style={globalStyles.safeAreaView}>
                <Text>{this.props.route.params.roomId}</Text>
                <ScrollView>
                    <View style={globalStyles.page}>
                        <View style={styles.twoCards}>
                            <View style={styles.containerHalfWidth}>
                                <View style={[globalStyles.card, styles.cardLeft]}>
                                    <Text style={[globalStyles.text, globalStyles.cardTitle]}>Bezetting</Text>
                                    <Gauge
                                        color={this.color}
                                        max={60}
                                        value={41}
                                        // showLabel={'text'}
                                    />
                                </View>
                            </View>

                            <View style={styles.containerHalfWidth}>
                                <View style={[globalStyles.card, styles.cardRight]}>
                                    <Text style={[globalStyles.text, globalStyles.cardTitle]}>Luchtkwaliteit</Text>
                                    <Gauge
                                        color={this.color}
                                        max={1600}
                                        value={this.state.co2Value}
                                        showLabel={'text'}
                                    />
                                </View>
                            </View>
                        </View>


                        <View style={[globalStyles.card]}>
                            <Text style={[globalStyles.text, globalStyles.cardTitle]}>Verwachte bezetting</Text>

                            <Prediction color={this.color}/>
                        </View>

                        <View style={[globalStyles.card]}>
                            <Text style={[globalStyles.text, globalStyles.cardTitle]}>Bezetting en CO2</Text>

                            <PeopleAndCO2 color={this.color}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    twoCards: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerHalfWidth: {
        width: '50%'
    },
    cardLeft: {
        height: 150,
        marginRight: 7
    },
    cardRight: {
        height: 150,
        marginLeft: 7
    },
    cardTitle: {
        fontSize: 20,
        marginTop: 7,
        marginBottom: 7
    },
    victoryContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: "column",
    }
});

export default RoomDetail;