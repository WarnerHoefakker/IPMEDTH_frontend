const colors = {
    purple: {
        normal: '#848cd9',
        highlight: '#4D2691'
    },
    green: {
        normal: '#94E393',
        highlight: '#379535'
    },
    blue: {
        normal: '#579fbd',
        highlight: '#176080'
    }
};

const chartStyles = {
    barStyle: {
        purple: {
            data: {
                fill: colors.purple.normal
            }
        },
        green: {
            data: {
                fill: colors.green.normal
            }
        },
        blue: {
            data: {
                fill: colors.blue.normal
            }
        },
        addHighlight: (color, timestamp, highlight) => {
            return timestamp === highlight ? colors[color].highlight : colors[color].normal
        }
    },
    lineStyle: {
        data: {
            stroke: '#D56062',
            strokeWidth: 3,
            strokeLinecap: "round"
        }
    },
    legendStyle: {
        legendItemColorBar: {
            purple: {
                backgroundColor: '#848cd9'
            },
            green: {
                backgroundColor: '#94E393'
            },
            blue: {
                backgroundColor: '#579fbd'
            },
        },
    },
    yAxisStyle: {
        axis: {stroke: "none"},
        axisLabel: {fontSize: 13, padding: 35, fontFamily: 'Arial', color: '#545454'}, //TODO: Roboto
        grid: {stroke: "#cfcfcf"},
        tickLabels: {fontSize: 13, padding: 2, fontFamily: 'Arial', color: '#545454'}
    },
    xAxisStyle: {
        axis: {stroke: "#cfcfcf"},
        tickLabels: {fontSize: 13, padding: 5, fontFamily: 'Arial', color: '#545454'}
    }
};

export default chartStyles;