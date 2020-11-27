import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine } from "victory-native";

import chartStyles from "../../assets/style/chartStyle";
import globalStyles from "../../assets/style/globalStyle";

const BarAndLineChart = ({barData, barMax, barMin, lineData, lineMax, lineMin, xLabels, color}) => {
    const height = 270;
    const width = 330;

    return (
        <View style={styles.container}>
            <VictoryChart width={width} height={height} domainPadding={{ x: 20 }} >
                <VictoryAxis dependentAxis label={'Aantal personen'} key={0}
                             style={chartStyles.yAxisStyle}
                             tickValues={[0.25, 0.5, 0.75, 1]}
                             tickFormat={(t) => t * barMax}
                />
                <VictoryAxis dependentAxis label={'CO2 niveau (ppm)'} orientation={'right'} key={1}
                             tickValues={[0.25, 0.5, 0.75, 1]}
                             tickFormat={(t) => t * lineMax}
                             style={chartStyles.yAxisStyle}
                />

                <VictoryAxis tickValues={xLabels}
                             style={chartStyles.xAxisStyle}
                />

                <VictoryBar data={barData}
                            x="timestamp"
                            y={(datum) => datum.amountOfPeople / barMax}
                            style={chartStyles.barStyle[color || 'purple']}
                            alignment={'middle'}
                            animate={{
                                duration: 300,
                                onLoad: { duration: 300 }
                            }}
                            barRatio={0.9}
                            cornerRadius={4}
                            key={0}
                />

                <VictoryLine data={lineData}
                             x="timestamp"
                             y={(datum) => datum.co2Value / lineMax}
                             style={chartStyles.lineStyle}
                             animate={{
                                 duration: 300,
                                 onLoad: { duration: 300 }
                             }}
                             key={1}
                             interpolation="natural"
                />
            </VictoryChart>

            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[chartStyles.legendStyle.legendItemColorBar[color], styles.legendItemSymbol]} />
                    <Text style={globalStyles.text}>Bezetting</Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.legendItemColorLine, styles.legendItemSymbol]} />
                    <Text style={globalStyles.text}>CO2</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    },
    legend: {
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'center',
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
        marginRight: 5
    },
    legendItemColorLine: {
        backgroundColor: '#D56062'
    },
    legendItemText: {

    }
});

export default BarAndLineChart;