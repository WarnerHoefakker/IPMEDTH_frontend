import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";
import globalStyles from "../../assets/style/globalStyle";

export default function RoomDetail() {
    const color = 'green';

    return (
        <SafeAreaView style={globalStyles.safeAreaView}>
            <ScrollView>
                <View style={globalStyles.page} >
                    <View style={styles.twoCards}>
                        <View style={styles.containerHalfWidth}>
                            <View style={[globalStyles.card, styles.cardLeft]}>
                                <Text style={[globalStyles.text, globalStyles.cardTitle]}>Bezetting</Text>
                                <Gauge
                                    color={color}
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
                                    color={color}
                                    max={100}
                                    value={30}
                                    showLabel={'text'}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={[globalStyles.card]}>
                        <Text style={[globalStyles.text, globalStyles.cardTitle]}>Verwachte bezetting</Text>

                        <Prediction color={color}/>
                    </View>

                    <View style={[globalStyles.card]}>
                        <Text style={[globalStyles.text, globalStyles.cardTitle]}>Bezetting en CO2</Text>

                        <PeopleAndCO2 color={color}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
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