import React from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Scan from '../NavigationBar'

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

const goToScanScreen = (navigation) => {
  navigation.replace("Home", {screen: 'Scan'})
}

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        bottomBarColor={'#fff'}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.replace("Home")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-1.png")} />,
            title: 'Welkom bij Corona Cleaner',
            subtitle: 'De corona applicatie van de opleiding Informatica aan de Hogeschool Leiden!'
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-2.png")} />,
            title: 'Overzicht',
            subtitle: 'Bekijk de hoeveelheid mensen en de luchtkwaliteit per ruimte zodat jij je bezoek aan Carrefour hier op kunt aanpassen.'
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-3.png")} />,
            title: 'Plan je bezoek',
            subtitle: "Kijk op welke tijdstippen het rustig is in je favoriete werkruimte",
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-4.png")} />,
            title: 'Plattegronden',
            subtitle: "Bekijk per verdieping de veiligheidsgraad van alle ruimtes op die verdieping."
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-5.png")} />,
            title: 'Regels',
            subtitle: 'Houd a.u.b. voldoende afstand en draag altijd een mondkapje op locatie, samen houden wij Carrefour veilig.'
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-6.png")} />,
            title: 
            <TouchableHighlight style={styles.scanButton} underlayColor="#2789b3" onPress={() => goToScanScreen(navigation)}>
              <Text style={styles.scanButtonText}>Scannen maar!</Text>
            </TouchableHighlight>,
            subtitle: 'Om maximaal gebruik te kunnen maken van de applicatie scan je jouw tag met de scanfunctie binnen de applicatie.'
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
  onboardingImage: {
    width: 300,
    height: 300
  },
  scanButton: {
    backgroundColor: '#247BA0',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
},
scanButtonText: {
  color: '#fff'
},
});