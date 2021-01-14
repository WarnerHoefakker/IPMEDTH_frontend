import React from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        onDone={() => {
          AsyncStorage.getItem('onboardingCompleted').then(value => {
            if (value == null){
                AsyncStorage.setItem('onboardingCompleted', 'true');
                navigation.replace("Home", {screen: 'Scan'})
            } else {
              navigation.replace("Home")
            }
          });
        }}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-1.png")} />,
            title: <Text style={styles.title}>Welkom bij Corona Cleaner</Text>,
            subtitle: <Text style={styles.text}>De corona applicatie van de opleiding Informatica aan de Hogeschool Leiden!</Text>
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-2.png")} />,
            title: <Text style={styles.title}>Overzicht</Text>,
            subtitle: <Text style={styles.text}>Bekijk de hoeveelheid mensen, de luchtkwaliteit en de veiligheidsstatus van elke ruimte zodat jij je bezoek aan Carrefour hier op kunt aanpassen.</Text>
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-3.png")} />,
            title: <Text style={styles.title}>Plan je bezoek</Text>,
            subtitle: <Text style={styles.text}>Kijk op welke tijdstippen het rustig is in je favoriete werkruimte</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-4.png")} />,
            title: <Text style={styles.title}>Plattegronden</Text>,
            subtitle: <Text style={styles.text}>Bekijk per verdieping de veiligheidsgraad van alle ruimtes op die verdieping.</Text>
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-5.png")} />,
            title: <Text style={styles.title}>Regels</Text>,
            subtitle: <Text style={styles.text}>Houd a.u.b. voldoende afstand en draag altijd een mondkapje op locatie, samen houden wij Carrefour veilig.</Text>
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.onboardingImage} source={require("../../../assets/img/onboarding-6.png")} />,
            title: <Text style={styles.title}>Scannen maar!</Text>,
            subtitle: <Text style={styles.text}>Om maximaal gebruik te kunnen maken van de applicatie scan je jouw tag met de scanfunctie binnen de applicatie.</Text>
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
  title:{
    fontSize: 24,
    marginBottom: 20,
    marginHorizontal:40,
    textAlign: "center", 
    color: '#383838' 
  },
  text:{
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 30,
    color: "#545454",
    lineHeight: 22
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