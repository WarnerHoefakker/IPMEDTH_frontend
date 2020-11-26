import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Overslaan</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Volgende</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Klaar</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: '#9BD380',
            image: <Image source={require("../../assets/img/corona.png")} />,
            title: 'Welkom bij Corona Cleaner',
          },
          {
            backgroundColor: '#BBE1FF',
            image: <Image source={require("../../assets/img/corona.png")} />,
            title: 'Hou 1,5 meter afstand!',
          },
          {
            backgroundColor: '#A782D9',
            image: <Image source={require("../../assets/img/corona.png")} />,
            title: 'Luchtkwaliteit',
            subtitle: "Om de luchtkwaliteit van de ruimte te meten word er gebruik gemaakt van CO2 sensoren",
          },
          {
            backgroundColor: '#FFD456',
            image: <Image source={require("../../assets/img/corona.png")} />,
            title: 'Registreer wanneer je een ruimte betreed',
            subtitle: "tags"
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});