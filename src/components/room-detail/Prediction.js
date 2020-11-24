import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BarChart from "../charts/Barchart";

const Prediction = ({color}) => {
    // dummy data
    const data = {
        day: [
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
            { timestamp: 'ma', amountOfPeople: 52 },
            { timestamp: 'di', amountOfPeople: 48 },
            { timestamp: 'wo', amountOfPeople: 37 },
            { timestamp: 'do', amountOfPeople: 28 },
            { timestamp: 'vr', amountOfPeople: 21 },
        ],
        min: 0,
        max: 60
    };

    const yLabels = {
        day: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        week: ['ma', 'di', 'wo', 'do', 'vr']
    };

    const highlight = {
        day: '12',
        week: 'wo'
    };

    const [selectedPrediction, setSelectedPrediction] = useState('day');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => setSelectedPrediction('day')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedPrediction === 'day' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[styles.buttonTextSelect, selectedPrediction === 'day' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Dag</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setSelectedPrediction('week')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedPrediction === 'week' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[styles.buttonTextSelect, selectedPrediction === 'week' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Week</Text>
                    </View>
                </TouchableHighlight>
            </View>


            <BarChart color={color} data={data[selectedPrediction]} min={data.min} max={data.max} yLabels={yLabels[selectedPrediction]} highlight={highlight[selectedPrediction]} />
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

export default Prediction;