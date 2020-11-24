import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";

export default function RoomDetail() {
    const color = 'green';

    return (
        <ScrollView >
            <View style={styles.detailPage}>
                <View style={styles.twoCards}>
                    <View style={styles.containerHalfWidth}>
                        <View style={[styles.card, styles.cardLeft]}>
                            <Text style={styles.cardTitle}>Bezetting</Text>
                            <Gauge
                                color={color}
                                max={60}
                                value={41}
                                // showLabel={'text'}
                            />
                        </View>
                    </View>

                    <View style={styles.containerHalfWidth}>
                        <View style={[styles.card, styles.cardRight]}>
                            <Text style={styles.cardTitle}>Luchtkwaliteit</Text>
                            <Gauge
                                color={color}
                                max={100}
                                value={30}
                                showLabel={'text'}
                            />
                        </View>
                    </View>
                </View>


                <View style={[styles.card]}>
                    <Text style={styles.cardTitle}>Verwachte bezetting</Text>

                    <Prediction color={color}/>
                </View>

                <View style={[styles.card]}>
                    <Text style={styles.cardTitle}>Bezetting en CO2</Text>

                    <PeopleAndCO2 color={color}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailPage: {
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EFEFEF'
    },
    twoCards: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerHalfWidth: {
        width: '50%'
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 14,
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