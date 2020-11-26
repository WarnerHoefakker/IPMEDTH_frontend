import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight} from 'react-native';
import {getCO2, getRFID} from '../../api/testAPI';
import globalStyles from "../../assets/style/globalStyle";

export default function Dashboard() {

    const [co2Value, setCo2Value] = useState('');
    const [rfidId, setRfidId] = useState('');

    getCO2().then((response) => setCo2Value(response));
    getRFID().then((response) => setRfidId(response));

    return (
        <SafeAreaView style={globalStyles.safeAreaView}>
            <ScrollView >
                <View style={globalStyles.page}>
                    <Text style={globalStyles.text}>Dashboard</Text>

                    {/*Style tests*/}
                    <Text style={globalStyles.title}>Title</Text>
                    <Text style={globalStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

                    <TouchableHighlight style={globalStyles.buttonContainer} underlayColor={'white'} onPress={() => console.log('click')}>
                        <View style={globalStyles.button}>
                            <Text style={[globalStyles.text, globalStyles.buttonText]}>Button</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={globalStyles.card}>
                        <Text style={[globalStyles.text, globalStyles.cardTitle]}>Card Title</Text>
                        <Text style={globalStyles.text}>Card text</Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#EFEFEF',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});