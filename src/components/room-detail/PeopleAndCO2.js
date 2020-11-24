import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BarAndLineChart from "../charts/BarAndLineChart";

const PeopleAndCO2 = ({color}) => {
    // dummy data
    const peopleData = {
        today: [
            { timestamp: '08', amountOfPeople: 27 },
            { timestamp: '09', amountOfPeople: 32 },
            { timestamp: '10', amountOfPeople: 52 },
            { timestamp: '11', amountOfPeople: 48 },
            { timestamp: '12', amountOfPeople: 37 },
            { timestamp: '13', amountOfPeople: 28 },
            { timestamp: '14', amountOfPeople: 21 },
            { timestamp: '15', amountOfPeople: 25 },
            { timestamp: '16', amountOfPeople: 28 },
            { timestamp: '17', amountOfPeople: 16 },
            { timestamp: '18', amountOfPeople: 8 },
        ],
        week: [
            { timestamp: 'ma', amountOfPeople: 37 },
            { timestamp: 'di', amountOfPeople: 28 },
            { timestamp: 'wo', amountOfPeople: 21 },
            { timestamp: 'do', amountOfPeople: 25 },
            { timestamp: 'vr', amountOfPeople: 28 },
        ],
        min: 0,
        max: 60
    };

    // dummy data
    const co2Data = {
        today: [
            { timestamp: '08', co2Value: 500 },
            { timestamp: '09', co2Value: 470 },
            { timestamp: '10', co2Value: 580 },
            { timestamp: '11', co2Value: 900 },
            { timestamp: '12', co2Value: 1100 },
            { timestamp: '13', co2Value: 1000 },
            { timestamp: '14', co2Value: 750 },
            { timestamp: '15', co2Value: 500 },
            { timestamp: '16', co2Value: 280 },
            { timestamp: '17', co2Value: 280 },
            { timestamp: '18', co2Value: 370 },
        ],
        week: [
            { timestamp: 'ma', co2Value: 1100 },
            { timestamp: 'di', co2Value: 1000 },
            { timestamp: 'wo', co2Value: 750 },
            { timestamp: 'do', co2Value: 500 },
            { timestamp: 'vr', co2Value: 280 },
        ],
        min: 0,
        max: 1600
    };

    const yLabels = {
        today: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        week: ['ma', 'di', 'wo', 'do', 'vr']
    };

    const [selectedTimeframePeopleCO2, setSelectedTimeframePeopleCO2] = useState('today');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => setSelectedTimeframePeopleCO2('today')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedTimeframePeopleCO2 === 'today' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[styles.buttonTextSelect, selectedTimeframePeopleCO2 === 'today' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Vandaag</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setSelectedTimeframePeopleCO2('week')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedTimeframePeopleCO2 === 'week' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[styles.buttonTextSelect, selectedTimeframePeopleCO2 === 'week' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Deze week</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <BarAndLineChart color={color} barData={peopleData[selectedTimeframePeopleCO2]} barMax={peopleData.max} barMin={peopleData.min} lineData={co2Data[selectedTimeframePeopleCO2]} lineMax={co2Data.max} lineMin={co2Data.min} yLabels={yLabels[selectedTimeframePeopleCO2]} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonSelect: {
        padding: 5,
        margin: 5,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    buttonSelected: {
        backgroundColor: '#247BA0',
    },
    buttonDeselected: {
        backgroundColor: '#D3E4EC'
    },
    buttonTextSelect: {
        color: '#545454',
        fontSize: 16
    },
    buttonTextSelected: {
        color: '#fff'
    },
    buttonTextDeselected: {
        color: '#545454'
    }
});

export default PeopleAndCO2;