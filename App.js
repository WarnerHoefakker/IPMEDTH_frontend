import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getCO2, getRFID} from "./src/api/testAPI";
import RoomDetail from "./src/components/room-detail/RoomDetail";

export default function App() {
    const [co2Value, setCo2Value] = useState('');
    const [rfidId, setRfidId] = useState('');

    getCO2().then((response) => setCo2Value(response));
    getRFID().then((response) => setRfidId(response));

    return (
        <View>
            <RoomDetail/>
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
