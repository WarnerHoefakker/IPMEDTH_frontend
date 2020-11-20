import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

    return (
        <NavigationContainer>
            <NavigationBar></NavigationBar>
        </NavigationContainer>
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
