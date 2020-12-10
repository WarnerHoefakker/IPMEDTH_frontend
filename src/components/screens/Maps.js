import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import globalStyles from "../../assets/style/globalStyle";
import LC4 from "../maps/LC4";
import LC5 from "../maps/LC5";
import LC6 from "../maps/LC6";
import LC7 from "../maps/LC7";

export default function Maps() {
    const [selectedLevel, setSelectedLevel] = useState('level4');

    return (
            <View style={[globalStyles.page, styles.page]}>
                <DropDownPicker
                    items={[
                        {label: 'Verdieping 4', value: 'level4'},
                        {label: 'Verdieping 5', value: 'level5'},
                        {label: 'Verdieping 6', value: 'level6'},
                        {label: 'Verdieping 7', value: 'level7'},
                    ]}
                    defaultValue={selectedLevel}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={(item) => {
                        setSelectedLevel(item.value);
                    }}
                />

                <View style={styles.map}>
                    {
                        // #F4D9C6 #F2B385 #F48E43
                        selectedLevel === 'level4' &&
                        <LC4
                            colors={{
                                lc4010: '#F4D9C6',
                                lc4014: '#F2B385',
                                lc4024: '#F48E43',
                                lc4044: '#F4D9C6',
                                lc4050: '#F48E43',
                                lc4064: '#F2B385',
                            }}
                        />
                    }

                    {
                        // #D9DBF3 #B3B8E7 #848CD9
                        selectedLevel === 'level5' &&
                        <LC5
                            colors={{
                                lc5006: '#D9DBF3',
                                lc5010: '#B3B8E7',
                                lc5024: '#848CD9',
                                lc5044: '#B3B8E7',
                                lc5050: '#D9DBF3',
                                lc5064: '#848CD9',
                            }}
                        />
                    }

                    {
                        // #E4F8E4 #ADF0AD #78D076
                        selectedLevel === 'level6' &&
                        <LC6
                            colors={{
                                lc6005: '#E4F8E4',
                                lc6010: '#ADF0AD',
                                lc6024: '#78D076',
                                lc6025: '#E4F8E4',
                                lc6044: '#ADF0AD',
                                lc6050: '#78D076',
                                lc6060: '#E4F8E4',
                                lc6064: '#ADF0AD',
                            }}
                        />
                    }

                    {
                        // #CBE2EB #8EBFD2 #579FBD
                        selectedLevel === 'level7' &&
                        <LC7
                            colors={{
                                lc7006: '#CBE2EB',
                                lc7010: '#8EBFD2',
                                lc7020: '#579FBD',
                                lc7024: '#CBE2EB',
                                lc7025: '#8EBFD2',
                                lc7044: '#579FBD',
                                lc7050: '#CBE2EB',
                                lc7060: '#8EBFD2',
                                lc7064: '#579FBD',
                            }}
                        />
                    }
                </View>
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
    }
});