import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import RNEventSource from 'react-native-event-source'
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";
import globalStyles from "../../assets/style/globalStyle";
import {API_URL} from '@env';
import {getRoomHistory, getRoomPrediction} from "../../api/roomsAPI";

class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        const colorList = {
            LC4: 'orange',
            LC5: 'purple',
            LC6: 'green',
            LC7: 'blue'
        }

        this.color = colorList[this.props.route.params.levelName]

        this.state = {
            co2Value: 0,
            pageLoading: true,
            loadingItems: {
                prediction: true,
                history: true,
                // currentStatus: true
            },
            historyData: {},
            predictionData: {},
        }
    }

    componentDidMount() {
        getRoomPrediction(this.props.route.params.roomId).then((response) => {
            this.setState({predictionData: response});
            this.setLoading("prediction", false)
        });

        getRoomHistory(this.props.route.params.roomId).then((response) => {
            this.setState({historyData: response});
            this.setLoading("history", false)
        });
    }

    setLoading(key, value) {
        let pageLoading = false;
        let loadingItems = this.state.loadingItems;

        loadingItems[key] = value;
        this.setState({loadingItems});

        for(const item in loadingItems) {
            if(loadingItems[item] === true) {
               pageLoading = true
            }
        }

        this.setState({pageLoading})
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
                <Text>{this.props.route.params.roomName}</Text>
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

                            <Prediction color={this.color} predictionData={this.state.predictionData}/>
                        </View>

                        <View style={[globalStyles.card]}>
                            <Text style={[globalStyles.text, globalStyles.cardTitle]}>Bezetting en CO2</Text>

                            <PeopleAndCO2 color={this.color} historyData={this.state.historyData}/>
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