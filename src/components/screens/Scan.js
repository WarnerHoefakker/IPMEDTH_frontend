import React from 'react'
import {
  View, Text, TouchableOpacity, Platform, Image, StyleSheet
} from 'react-native'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import globalStyles from "../../assets/style/globalStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Scan extends React.Component {

    state = {
        androidLookingForTags: false,
        tagSuccesfullyDetected : false,
        tagValue: ''
    }

    saveTag = async(value) => {
        try{
            await AsyncStorage.setItem('TAG', value);
            this.setState({tagValue: value});
            console.log(this.state.tagValue)
        } catch(e) {
            console.log(e);
        }
    }

    componentDidMount() {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
            console.warn('tag', tag);
            NfcManager.setAlertMessageIOS('I got your tag!');
            NfcManager.unregisterTagEvent().catch(() => 0);
            this.setState({androidLookingForTags: false})
            this.showSuccesfullyDetectedTagPopUp()
            // tag is een object wanneer je OV kaart gescand wordt, bij onze eigen 
            // tags wordt dit gewoon een string wss dus dan is het 'this.saveTag(tag)' in plaats van 'this.saveTag(tag.id)'
            // de saveTag() functie slaat de waarde op in AsyncStorage, zodat deze later gebruikt kan worden om de ruimte op te halen 
            // waar de gebruiker is ingelogd.
            this.saveTag(tag.id)
        });
    }

    componentWillUnmount() {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        NfcManager.unregisterTagEvent().catch(() => 0);
    }

    showSuccesfullyDetectedTagPopUp() {
        this.setState({tagSuccesfullyDetected: true})
        setTimeout(() => {this.setState({tagSuccesfullyDetected: false})}, 3000)
    }

    render() {
        return (
            <View style={[globalStyles.page, styles.page]}>
                <TouchableOpacity 
                    style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
                    onPress={this._test}>
                    <Text>Add tag</Text>
                </TouchableOpacity>

                {this.state.androidLookingForTags && Platform.OS === 'android' && <View style={styles.popUpContainer}>
                    <Text style={styles.popUpTitle}>Ready to scan</Text>
                    <Image style={styles.popUpImage} source={require("../../../assets/img/ready-to-scan-pop-up-icon-android.png")}/>
                    <Text style={styles.popUpText}>Hold tag near phone</Text>
                    <TouchableOpacity
                        onPress={this._cancel}
                        style={styles.popUpCancel}>
                        <Text style={styles.popUpText}>Cancel</Text>
                    </TouchableOpacity>
                </View>}

                {this.state.tagSuccesfullyDetected && Platform.OS === 'android' && <View style={styles.popUpContainer}>
                    <Text style={styles.popUpTitle}>Ready to scan</Text>
                    <Image style={styles.popUpImage} source={require("../../../assets/img/scan-succesful-pop-up-icon-android.png")}/>
                    <Text style={styles.popUpText}>Tag succesvol gedetecteerd!</Text>
                </View>}
                
            </View>
        )
    }

  _cancel = () => {
        NfcManager.unregisterTagEvent().catch(() => 0);
        this.setState({androidLookingForTags: false})
  }

  _test = async () => {
    try {
        this.setState({androidLookingForTags: true})
        await NfcManager.registerTagEvent();
    } catch (ex) {
        console.warn('ex', ex);
        NfcManager.unregisterTagEvent().catch(() => 0);
        this.setState({androidLookingForTags: false})
    }
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
    },
    popUpContainer: {
        width: '100%',
        height: 330,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 20,
        padding: 20,
        position: 'absolute', 
        bottom: 0,
        alignItems: 'center'
    },
    popUpImage: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    popUpTitle: {
        fontSize: 24,
        marginBottom: 20
    },
    popUpText: {
        fontSize: 16
    },
    popUpCancel: {
        backgroundColor: '#D4D4D4',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        marginBottom: 20
    }
});

export default Scan