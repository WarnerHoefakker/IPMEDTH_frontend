import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import globalStyles from "../../assets/style/globalStyle";

const Gauge = ({color, value, min, max, showLabel, size}) => {
    const colors = {
        orange: ['#f4d9c6', '#f2b385', '#f48e43'],
        blue: ['#cbe2eb', '#8ebfd2', '#579fbd'],
        green: ['#e4f8e4', '#c4efc3', '#94e393'],
        purple: ['#d9dbf3', '#b3b8e7', '#848cd9']
    };

    let valueLabel = <></>;

    if (showLabel !== 'text') {
        valueLabel = <Text style={[globalStyles.text, styles.label]}>{value} / {max}</Text>
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
                ]} // TODO: 400 - 800 = goed, 800 - 1000 = matig, 1000+ = slecht
                labelNoteStyle={[
                    globalStyles.text,
                    {
                        display: showLabel === 'text' ? 'flex' : 'none',
                        fontSize: 14,
                        fontWeight: 'normal',
                        justifyContent: 'flex-end',
                    }
                ]}
                labelStyle={{display: 'none'}}
                size={size || 150}
                needleImage={require('../../assets/img/speedometer-needle3.png')}
                innerCircleStyle={size ? {width: size * 0.7, height: size / 2 * 0.7} : {width: 150 * 0.7, height: 150 / 2 * 0.7,}}
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
        justifyContent: 'flex-end'
    }
});

export default Gauge;