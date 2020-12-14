import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import chartStyles from "../../assets/style/chartStyle";
import globalStyles from "../../assets/style/globalStyle";

const Legend = ({colors}) => {
    return (
        <View style={styles.legend}>
            <View style={styles.legendItem}>
                <View style={[styles.legendItemSymbol, {backgroundColor: colors.good}]} />
                <Text style={globalStyles.text}>Goed</Text>
            </View>

            <View style={styles.legendItem}>
                <View style={[styles.legendItemSymbol, {backgroundColor: colors.medium}]} />
                <Text style={globalStyles.text}>Matig</Text>
            </View>

            <View style={styles.legendItem}>
                <View style={[styles.legendItemSymbol, {backgroundColor: colors.bad}]} />
                <Text style={globalStyles.text}>Slecht</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    legend: {
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'center',
        marginTop: 20
    },
    legendItem: {
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },
    legendItemSymbol: {
        width: 15,
        height: 15,
        marginRight: 5,
        borderWidth: 1,
        borderColor: "#2C2C2C",
    },
    legendItemColorLine: {
        backgroundColor: '#D56062'
    },
    legendItemText: {

    }
});

export default Legend;