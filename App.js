import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        return <Home />
        
    }
}




  export default App;
