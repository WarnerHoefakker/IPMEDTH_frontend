import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from "../../assets/style/globalStyle";

export default function Scan() {
    return (
        <View style={globalStyles.page}>
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