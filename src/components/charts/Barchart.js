import React from 'react';
import {StyleSheet, View } from 'react-native';
import {VictoryBar, VictoryChart, VictoryAxis} from "victory-native";
import globalStyles from "../../assets/style/globalStyle";
import chartStyles from "../../assets/style/chartStyle";

const BarChart = ({data, min, max, xLabels, color, highlight}) => {
    return (
        <View style={styles.container}>
            <VictoryChart width={330} height={270} domainPadding={{ x: 20 }} >
                <VictoryAxis dependentAxis label={'Gemiddeld aantal personen'} key={0}
                             style={chartStyles.yAxisStyle}
                             tickValues={[0.25, 0.5, 0.75, 1]}
                             tickFormat={(t) => t * max}
                />

                <VictoryAxis tickValues={xLabels}
                             style={chartStyles.xAxisStyle}
                />

                <VictoryBar data={data}
                            x="timestamp"
                            y={(datum) => datum.amountOfPeople / max}
                            style={{
                                data: {
                                    fill: ({ datum }) => chartStyles.barStyle.addHighlight(color || 'purple', datum.timestamp, highlight)
                                }
                            }}
                            alignment={'middle'}
                            animate={{
                                duration: 300,
                                onLoad: { duration: 300 }
                            }}
                            barRatio={0.9}
                            cornerRadius={4}
                />
            </VictoryChart>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default BarChart;