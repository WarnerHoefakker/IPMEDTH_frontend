import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [co2Value, setCo2Value] = useState('');
    const [rfidId, setRfidId] = useState('');

    fetch('http://localhost:3000/co2')
        .then((response) => response.json())
        .then((json) => {
            setCo2Value(json.value);
        })
        .catch((error) => {
            console.error(error);
        });

    fetch('http://localhost:3000/rfid')
        .then((response) => response.json())
        .then((json) => {
            setRfidId(json.tag);
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <View style={styles.container}>
            <Text>CoronaCleaner</Text>
            <Text>CO2 value: {co2Value}</Text>
            <Text>RFID id: {rfidId}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
