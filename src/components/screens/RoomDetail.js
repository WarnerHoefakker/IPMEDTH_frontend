import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function RoomDetail() {
    return (
        <View style={styles.container}>
            <Text>Room Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});