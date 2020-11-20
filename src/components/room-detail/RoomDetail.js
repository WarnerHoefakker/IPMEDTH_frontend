import React from 'react';
import {StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Gauge from "../charts/Gauge";

const RoomDetail = () => {
    return (
        <SafeAreaView >
            <View style={styles.detailPage}>
                <View style={styles.containerHalfWidth}>
                    <View style={[styles.card, styles.cardLeft]}>
                        <Text style={styles.cardTitle}>Bezetting</Text>
                        <Gauge
                            color={'blue'}
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
                            color={'blue'}
                            max={100}
                            value={30}
                            showLabel={'text'}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    detailPage: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        padding: 14,
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
        height: 150
    },
    cardLeft: {
       marginRight: 7
    },
    cardRight: {
        marginLeft: 7
    },
    cardTitle: {
        fontSize: 20,
        marginTop: 7,
        marginBottom: 7
    }
});

export default RoomDetail