import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scan from './screens/Scan';
import Maps from './screens/Maps';
import Onboarding from './screens/Onboarding';
import DashboardNavigation from './DashboardNavigation';


export default function Navigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            style={styles.navigationBar}
            tabBarOptions={{showLabel: false, style:styles.navigationBar}}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {

                    if(route.name == "DashboardNavigation"){
                        if(focused){
                            return <Image style={styles.dashboardIcon} source={require("../../assets/img/dashboard-icon-focused.png")}/>
                        } else{
                            return <Image style={styles.dashboardIcon} source={require("../../assets/img/dashboard-icon.png")}/>
                        }
                    } else if (route.name == "Maps"){
                        if(focused){
                            return <Image style={styles.mapIcon} source={require("../../assets/img/map-icon-focused.png")}/>
                        } else {
                            return <Image style={styles.mapIcon} source={require("../../assets/img/map-icon.png")}/>
                        }
                    } else if (route.name == "Onboarding"){
                        if(focused){
                            return <Image style={styles.onboardingIcon} source={require("../../assets/img/onboarding-icon-focused.png")}/>
                        } else {
                            return <Image style={styles.onboardingIcon} source={require("../../assets/img/onboarding-icon.png")}/>
                        }
                    } else if (route.name == "Scan"){
                        if(focused){
                            return <Image style={styles.addTagIcon} source={require("../../assets/img/add-tag-icon-focused.png")}/>
                        } else {
                            return <Image style={styles.addTagIcon} source={require("../../assets/img/add-tag-icon.png")}/>
                        }
                    }
                },
            })}>
            <Tab.Screen
                name="DashboardNavigation"
                component={DashboardNavigation}>
            </Tab.Screen>
            <Tab.Screen
                name="Maps"
                component={Maps}>
            </Tab.Screen>
            <Tab.Screen
                name="Onboarding"
                component={Onboarding}
                options={{tabBarVisible: false}}>
            </Tab.Screen>
            <Tab.Screen
                name="Scan"
                component={Scan}>
            </Tab.Screen>
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    dashboardIcon:{
        width: 26,
        height: 26
    },

    roomDetailIcon:{
        width: 32,
        height: 32
    },

    mapIcon:{
        width: 19,
        height: 17
    },

    onboardingIcon:{
        width: 26,
        height: 26
    },

    addTagIcon:{
        width: 24,
        height: 24
    },

    navigationBar: {
      height: 56,
      borderTopWidth: 0
    }
});
