import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BarAndLineChart from "../charts/BarAndLineChart";

const PeopleAndCO2 = ({color, historyData}) => {
    const xLabels = {
        today: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        week: ['zo','ma', 'di', 'wo', 'do', 'vr', 'za']
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

            <BarAndLineChart color={color} barData={historyData.peopleData[selectedTimeframePeopleCO2]} barMax={historyData.peopleData.max} barMin={historyData.peopleData.min} lineData={historyData.co2Data[selectedTimeframePeopleCO2]} lineMax={historyData.co2Data.max} lineMin={historyData.co2Data.min} xLabels={xLabels[selectedTimeframePeopleCO2]} />
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