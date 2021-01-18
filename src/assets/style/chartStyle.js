const colors = {
    purple: {
        normal: '#848cd9',
        highlight: '#4D2691'
    },
    green: {
        normal: '#5EBCBC',
        highlight: '#33868c'
    },
    blue: {
        normal: '#4471c9',
        highlight: '#293060'
    },
    orange: {
        normal: '#E877D3',
        highlight: '#aa3a95'
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
        orange: {
            data: {
                fill: colors.orange.normal
            }
        },
        addHighlight: (color, timestamp, highlight) => {
            return timestamp === highlight ? colors[color].highlight : colors[color].normal
        }
    },
    lineStyle: {
        purple: {
            data: {
                stroke: '#863272',
                strokeWidth: 3,
                strokeLinecap: "round"
            }
        },
        green: {
            data: {
                stroke: '#863272',
                strokeWidth: 3,
                strokeLinecap: "round"
            }
        },
        blue: {
            data: {
                stroke: '#863272',
                strokeWidth: 3,
                strokeLinecap: "round"
            }
        },
        orange: {
            data: {
                stroke: '#863272',
                strokeWidth: 3,
                strokeLinecap: "round"
            }
        }
    },
    legendStyle: {
        legendItemColorBar: {
            purple: {
                backgroundColor: '#848cd9'
            },
            green: {
                backgroundColor: '#5EBCBC'
            },
            blue: {
                backgroundColor: '#4471c9'
            },
            orange: {
                backgroundColor: '#E877D3'
            },
        },
        legendItemColorLine: {
            purple: {
                backgroundColor: '#863272'
            },
            green: {
                backgroundColor: '#863272'
            },
            blue: {
                backgroundColor: '#863272'
            },
            orange: {
                backgroundColor: '#863272'
            },
        },
    },
    yAxisStyle: {
        axis: {stroke: "none"},
        axisLabel: {fontSize: 13, padding: 35, fontFamily: 'Arial', color: '#545454'},
        grid: {stroke: "#cfcfcf"},
        tickLabels: {fontSize: 13, padding: 2, fontFamily: 'Arial', color: '#545454'}
    },
    xAxisStyle: {
        axis: {stroke: "#cfcfcf"},
        tickLabels: {fontSize: 13, padding: 5, fontFamily: 'Arial', color: '#545454'}
    }
};

export default chartStyles;