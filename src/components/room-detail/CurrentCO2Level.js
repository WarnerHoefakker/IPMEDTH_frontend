import React, {useEffect, useState} from 'react';
import Gauge from "../charts/Gauge";

const CurrentCo2Level = ({color, value, size}) => {
    const [formattedMax, setFormattedMax] = useState('');
    const [formattedValue, setFormattedValue] = useState('');

    const max = 1600;

    useEffect(() => {
        getValue();
    });

    const getValue = () => {
        const percentage = value / max;

        let newValue = 0;
        let percentage2 = 0;

        if(percentage >= 0 && percentage < 0.5) {
            percentage2 = percentage / 0.5;
            newValue = percentage2 * 3;
        }
        else if (percentage < 0.625) {
            percentage2 = (percentage - 0.5) / 0.125;
            newValue = percentage2 * 3 + 3;
        }
        else if (percentage <= 1) {
            percentage2 = (percentage - 0.625) / 0.375;
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
            size={size}
            showLabel={'text'}
        />
    )
}

export default CurrentCo2Level;