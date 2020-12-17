import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import globalStyles from "../../assets/style/globalStyle";
import {AntDesign} from '@expo/vector-icons';
import LC4 from "../maps/LC4";
import LC5 from "../maps/LC5";
import LC6 from "../maps/LC6";
import LC7 from "../maps/LC7";

import {getLevelStatus} from "../../api/levelAPI";

export default function Maps() {
    const [pageLoading, setPageLoading] = useState(true);

    const [selectedLevel, setSelectedLevel] = useState('LC5');
    const [levelState, setLevelState] = useState({LC4: {}, LC5: {}, LC6: {}, LC7: {},});

    function selectLevel(level) {
        setSelectedLevel(level);
        setPageLoading(true);

        getLevelStatus(level).then((response) => {
            let obj = {...levelState};
            obj[level] = response;

            setLevelState(obj);
            setPageLoading(false);
        });
    }

    const levelColors = {
        LC4: {
            backgroundColor: '#F48E43',
            textColor: '#FFF'
        },
        LC5: {
            backgroundColor: '#848cd9',
            textColor: '#FFF'
        },
        LC6: {
            backgroundColor: '#94e393',
            textColor: '#383838'
        },
        LC7: {
            backgroundColor: '#579fbd',
            textColor: '#FFF'
        }
    };

    useEffect(() => {
        selectLevel('LC4'); //TODO: huidige verdieping selecteren
    }, []);

    return (
        <View style={[globalStyles.page, styles.page]}>
            <DropDownPicker
                items={[
                    {label: 'Verdieping 4', value: 'LC4'},
                    {label: 'Verdieping 5', value: 'LC5'},
                    {label: 'Verdieping 6', value: 'LC6'},
                    {label: 'Verdieping 7', value: 'LC7'},
                ]}
                defaultValue={selectedLevel}
                containerStyle={{height: 40}}
                style={[styles.pickerStyle, {backgroundColor: levelColors[selectedLevel].backgroundColor}]}
                itemStyle={styles.pickerItemStyle}
                dropDownStyle={styles.pickerDropDownStyle}
                activeItemStyle={styles.pickerActiveItemStyle}
                selectedLabelStyle={[styles.pickerSelectedLabelStyle, {color: levelColors[selectedLevel].textColor}]}
                labelStyle={styles.pickerLabelStyle}
                onChangeItem={(item) => {
                    selectLevel(item.value);
                }}
                customArrowDown={(size, color) => {
                    return <AntDesign name="caretdown" size={size} color={levelColors[selectedLevel].textColor}/>
                }}
                customArrowUp={(size, color) => {
                    return <AntDesign name="caretup" size={size} color={levelColors[selectedLevel].textColor}/>
                }}
            />

            {
                pageLoading ?
                    <View style={[styles.loadingContainer, styles.loadingHorizontal]}>
                        <ActivityIndicator size="large" color={levelColors[selectedLevel].backgroundColor}/>
                    </View>

                    :

                    <View style={styles.map}>
                        {
                            // #F4D9C6 #F2B385 #F48E43
                            selectedLevel === 'LC4' &&
                            <LC4 state={levelState.LC4}/>
                        }

                        {
                            // #D9DBF3 #B3B8E7 #848CD9
                            selectedLevel === 'LC5' &&
                            <LC5 state={levelState.LC5}/>
                        }

                        {
                            // #E4F8E4 #ADF0AD #78D076
                            selectedLevel === 'LC6' &&
                            <LC6 state={levelState.LC6}/>
                        }

                        {
                            // #CBE2EB #8EBFD2 #579FBD
                            selectedLevel === 'LC7' &&
                            <LC7 state={levelState.LC7}/>
                        }
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    map: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center"
    },
    loadingHorizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    pickerStyle: {
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.16,
        elevation: 4,
    },
    pickerItemStyle: {
        justifyContent: 'flex-start',
        paddingHorizontal: 10
    },
    pickerDropDownStyle: {
        backgroundColor: '#fafafa',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.16,
        elevation: 4,
    },
    pickerActiveItemStyle: {
        backgroundColor: '#DDDDDD'
    },
    pickerSelectedLabelStyle: {
        fontFamily: 'Roboto-Regular',

    },
    pickerLabelStyle: {
        color: '#383838'
    }
});