import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import {AppLoading} from "expo";
import { useFonts } from 'expo-font';

let customFonts = {
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf')
};

export default function App() {
    // Load custom fonts
    let [fontsLoaded] = useFonts(customFonts);

    /* checkForGUID() haalt de guid op uit de storage van een device en slaat deze op in de state 'GUID'.
    Wanneer er geen guid aanwezig is in de lokale storage wordt deze aangemaakt. Dit gebeurd dus bij het voor
    de eerste keer openen van de app én wanneer de applicatie data verwijderd wordt.

    uuid.v4() genereerd een random string in het volgende format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    de hoeveelheid mogelijke uitkomsten van deze functie is zo groot dat het vrijwel onmogelijk is om duplicate
    strings te genereren. */

    const [GUID, setGUID] = useState();

    const saveGUID = async(value) => {
        try{
            await AsyncStorage.setItem('GUID', value);
            setGUID(value);
        } catch(e) {
            console.log(e);
        }
    }

    const checkForGUID = async () => {
        try{
            let result = await AsyncStorage.getItem('GUID');
            if(result != null){
                setGUID(result)
            } else {
                let generatedGUID = uuid.v4();
                saveGUID(generatedGUID);
            }
        } catch(e) {
            console.log(e);
        }
    }

    checkForGUID();


    if(!fontsLoaded) {
        return <AppLoading/>
    }
    else {
        return (
            <NavigationContainer>
                <NavigationBar></NavigationBar>
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
