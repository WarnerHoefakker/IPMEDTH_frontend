import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Scan() {
    return (
        <View style={styles.container}>
            <Text>Scan</Text>
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