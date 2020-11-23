import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import Page from '../components/Page';
import Footer from '../components/Footer';

const Onboarding = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#9BD380"
            iconName="alert-circle"
            title="Welkom bij Corona Cleaner"
          />
          <Footer
            backgroundColor="#9BD380"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#BBE1FF"
            iconName="alert-circle"
            title="Hou 1,5 meter afstand!"
          />
          <Footer
            backgroundColor="#BBE1FF"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#A782D9"
            iconName="alert-circle"
            title="Om de luchtkwaliteit van ruimte te meten word er gebruik gemaakt van CO2 sensoren"
          />
          <Footer
            backgroundColor="#A782D9"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(3);
            }}
          />
        </View>
           
        <View key="4">
          <Page
            backgroundColor="#FFD456"
            iconName="alert-circle"
            title="Registreer je wanneer je een ruimte betreed!"
          />
                    
          <Footer
            backgroundColor="#FFD456"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;