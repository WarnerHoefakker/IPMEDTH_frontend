import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import RoomDetail from './screens/RoomDetail';

const Stack = createStackNavigator();

export default function DashboardNavigation() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
            <Stack.Screen name="RoomDetail" component={RoomDetail}></Stack.Screen>
        </Stack.Navigator>
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