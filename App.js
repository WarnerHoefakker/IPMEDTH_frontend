import React, { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import uuid from 'react-native-uuid';

import Onboarding from './src/components/Onboarding';
import Home from './src/components/NavigationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App = () =>{
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null){
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);
    if (isFirstLaunch === null) {
        return null;
    } else if ( isFirstLaunch === true){
        return (
            <NavigationContainer>
            <AppStack.Navigator headerMode="none">
              <AppStack.Screen name="Onboarding" component={Onboarding} />
              <AppStack.Screen name="Home" component={Home} />
            </AppStack.Navigator>
          </NavigationContainer>
        );
    } else {
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

        return <Home />
        
    }
}




  export default App;
