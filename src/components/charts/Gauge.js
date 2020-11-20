import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNSpeedometer from 'react-native-speedometer'

const Gauge = ({color, value, min, max, showLabel}) => {
    const colors = {
        blue: ['#cbe2eb', '#8ebfd2', '#579fbd'],
        green: ['#e4f8e4', '#c4efc3', '#94e393'],
        purple: ['#d9dbf3', '#b3b8e7', '#848cd9']
    };

    let valueLabel = <></>;

    if (showLabel !== 'text') {
        valueLabel = <Text style={styles.label}>{value} / {max}</Text>
    }

    return (
        <View style={styles.container}>
            <RNSpeedometer
                value={value || 0}
                minValue={min || 0}
                maxValue={max || 100}
                easeDuration={500}
                labels={[
                    {
                        name: 'Goed',
                        labelColor: '#000',
                        activeBarColor: colors[color] ? colors[color][0] : '#c8c8c8',
                    },
                    {
                        name: 'Matig',
                        labelColor: '#000',
                        activeBarColor: colors[color] ? colors[color][1] : '#a1a1a1',
                    },
                    {
                        name: 'Slecht',
                        labelColor: '#000',
                        activeBarColor: colors[color] ? colors[color][2] : '#707070',
                    },
                ]}
                labelNoteStyle={[styles.label, showLabel === 'text' ? '' : {display: 'none'}]}
                // labelStyle={[showValue ? '' : {display: 'none'}, {content: 'test', fontSize: 25}]}
                labelStyle={{display: 'none'}}
                size={150}
                needleImage={require('../../assets/img/speedometer-needle3.png')}
                innerCircleStyle={{width: 150 * 0.7, // TODO: aanpassen
                    height: 150 / 2 * 0.7,}}
            />
            {valueLabel}
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',

    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        justifyContent: 'flex-end',
        // flex: 1
    }
});

export default Gauge;