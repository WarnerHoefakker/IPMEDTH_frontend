import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import RNEventSource from 'react-native-event-source'
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";
import globalStyles from "../../assets/style/globalStyle";

class RoomDetail extends React.Component { // TODO: functie of class? export default function RoomDetail()

//     const color = 'green';
//
//     // Test voor Server Side Events
//     let [co2Value, setCo2Value] = useState(0);
//
//     const source = new RNEventSource('http://192.168.178.123:3001/test/sse'); // TODO: hier eigen lokale ip adres invullen/server ip adres invullen
//
//     source.addEventListener('message', (event) => {
//     let data = JSON.parse(event.data);
//     console.log(data);
//
//     setCo2Value(data.value);
// });
//
// console.log(source.url);

    color = 'green';

    constructor(props) {
        super(props);
        this.state = {
            co2Value: 0
        }
    }

    componentDidMount() {
//     // Test voor Server Side Events

        const source = new RNEventSource('http://192.168.178.123:3001/test/sse'); // TODO: hier eigen lokale ip adres invullen/server ip adres invullen

        source.addEventListener('message', (event) => {
            let data = JSON.parse(event.data);
            console.log(data.value);

            // this.state.co2Value = data.value; // TODO: reactive

            this.setState({co2Value: data.value})
        });
    }

    render() {
        return (
            <SafeAreaView style={globalStyles.safeAreaView}>
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
                                        max={100}
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