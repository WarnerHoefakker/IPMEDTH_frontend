import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import globalStyles from "../../assets/style/globalStyle";
import LC4 from "../maps/LC4";
import LC5 from "../maps/LC5";
import LC6 from "../maps/LC6";
import LC7 from "../maps/LC7";

import {getLevelStatus} from "../../api/levelAPI";

export default function Maps() {
    const [selectedLevel, setSelectedLevel] = useState('LC4');
    const [levelState, setLevelState] = useState({LC4: {}, LC5: {}, LC6: {}, LC7: {}, });

    function selectLevel(item) {
        setSelectedLevel(item.value);

        getLevelStatus(item.value).then((response) => {
            let obj = {...levelState};
            obj[item.value] = response;

            setLevelState(obj);

            console.log(obj);
        });
    }

    // selectLevel('LC4'); //TODO: huidige verdieping selecteren

    /*
    *  TODO:
    *   - Status bij elke map
    * */

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
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) => {
                    selectLevel(item);
                }}
            />

            <View style={styles.map}>
                {
                    // #F4D9C6 #F2B385 #F48E43
                    selectedLevel === 'LC4' &&
                    <LC4 state={levelState.LC4}  />
                }

                {
                    // #D9DBF3 #B3B8E7 #848CD9
                    selectedLevel === 'LC5' &&
                    <LC5 state={levelState.LC5} />
                }

                {
                    // #E4F8E4 #ADF0AD #78D076
                    selectedLevel === 'LC6' &&
                    <LC6 state={levelState.LC6} />
                }

                {
                    // #CBE2EB #8EBFD2 #579FBD
                    selectedLevel === 'LC7' &&
                    <LC7 state={levelState.LC7} />
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