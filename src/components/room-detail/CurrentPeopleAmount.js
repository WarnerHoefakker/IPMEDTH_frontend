import React, {useEffect, useState} from 'react';
import Gauge from "../charts/Gauge";

const CurrentPeopleAmount = ({color, max, value, size}) => {
    const [formattedMax, setFormattedMax] = useState('');
    const [formattedValue, setFormattedValue] = useState('');

    useEffect(() => {
        getValue();
    });

    const getValue = () => {
        const percentage = value / max;

        let newValue = 0;
        let percentage2 = 0;

        if(percentage >= 0 && percentage < 0.6) {
            percentage2 = percentage / 0.6;
            newValue = percentage2 * 3;
        }
        else if (percentage < 0.8) {
            percentage2 = (percentage - 0.6) / 0.2;
            newValue = percentage2 * 3 + 3;
        }
        else if (percentage <= 1) {
            percentage2 = (percentage - 0.8) / 0.2;
            newValue = percentage2 * 3 + 6;
        } else {
            newValue = 9;
        }

        setFormattedValue(newValue);
        setFormattedMax(9)
    }

    return (
        <Gauge
            color={color}
            max={formattedMax}
            value={formattedValue}
            labelMax={max}
            labelValue={value}
            size={size}
        />
    )
}

export default CurrentPeopleAmount;