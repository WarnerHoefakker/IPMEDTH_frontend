import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BarChart from "../charts/Barchart";
import globalStyles from "../../assets/style/globalStyle";

const Prediction = ({color, predictionData}) => {
    const xLabels = {
        day: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        week: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
    };

    const today = new Date();

    const highlight = {
        day: String("0" + today.getHours()).slice(-2),
        week: xLabels.week[today.getDay()]
    };

    const [selectedPrediction, setSelectedPrediction] = useState('day');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => setSelectedPrediction('day')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedPrediction === 'day' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[globalStyles.buttonText, styles.buttonTextSelect, selectedPrediction === 'day' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Vandaag</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setSelectedPrediction('week')} underlayColor="white">
                    <View style={[styles.buttonSelect, selectedPrediction === 'week' ? styles.buttonSelected : styles.buttonDeselected]}>
                        <Text style={[globalStyles.buttonText, styles.buttonTextSelect, selectedPrediction === 'week' ? styles.buttonTextSelected : styles.buttonTextDeselected]}>Deze week</Text>
                    </View>
                </TouchableHighlight>
            </View>


            <BarChart color={color} data={predictionData[selectedPrediction]} min={predictionData.min} max={predictionData.max} xLabels={xLabels[selectedPrediction]} highlight={highlight[selectedPrediction]} />
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