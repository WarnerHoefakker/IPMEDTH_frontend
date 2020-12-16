import React from 'react'
import {
    View, Text, TouchableOpacity, Platform, Image, StyleSheet
} from 'react-native'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import globalStyles from "../../assets/style/globalStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { G, Path } from "react-native-svg";

import {addTag} from '../../api/tagAPI'

class Scan extends React.Component {

    state = {
        androidLookingForTags: false,
        tagSuccesfullyDetected: false,
        tagValue: ''
    }

    saveTag = async (value) => {
        try {
            await AsyncStorage.setItem('TAG', value);
            this.setState({tagValue: value});

            const guid = await AsyncStorage.getItem('GUID');

            const response = await addTag(value, guid);

            console.log(response) // TODO: vanuit backend duidelijke error messages versturen, deze in app tonen

            console.log(this.state.tagValue)
        } catch (e) {
            console.log(e);
        }
    }

    getTag = async () => {
        const tagId = await AsyncStorage.getItem('TAG');

        console.log(tagId)

        this.setState({tagValue: tagId})
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

        this.getTag();
    }

    componentWillUnmount() {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        NfcManager.unregisterTagEvent().catch(() => 0);
    }

    showSuccesfullyDetectedTagPopUp() {
        this.setState({tagSuccesfullyDetected: true})
        setTimeout(() => {
            this.setState({tagSuccesfullyDetected: false})
        }, 3000)
    }

    render() {
        return (
            <View style={[globalStyles.page, styles.page]}>

                <View style={styles.pageContent}>
                    {this.state.tagValue === '' || this.state.tagValue === null  &&
                    <View style={styles.textContainer}>
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={145}
                            height={145}
                            viewBox="0 0 29.25 29.25"
                            style={styles.statusImage}
                        >
                            <G data-name="Icon ionic-ios-close-circle-outline" fill="#ff0e19">
                                <Path
                                    data-name="Path 49"
                                    d="M19.92 18.33l-3.706-3.705 3.705-3.705a1.124 1.124 0 00-1.589-1.589l-3.705 3.705-3.705-3.705a1.124 1.124 0 00-1.589 1.589l3.705 3.705-3.705 3.705a1.086 1.086 0 000 1.589 1.116 1.116 0 001.589 0l3.705-3.705 3.705 3.705a1.129 1.129 0 001.589 0 1.116 1.116 0 00.001-1.589z"
                                />
                                <Path
                                    data-name="Path 50"
                                    d="M14.625 1.969a12.651 12.651 0 11-8.951 3.705 12.573 12.573 0 018.951-3.705m0-1.969A14.625 14.625 0 1029.25 14.625 14.623 14.623 0 0014.625 0z"
                                />
                            </G>
                        </Svg>

                        <Text>Geen tag gekoppeld</Text>
                    </View>
                    }

                    {this.state.tagValue !== '' && this.state.tagValue !== null  &&
                    <View style={styles.textContainer}>
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={145}
                            height={145}
                            viewBox="0 0 146.75 146.75"
                            style={styles.statusImage}
                        >
                            <G data-name="Icon ionic-ios-checkmark-circle-outline" fill="#94e393">
                                <Path
                                    data-name="Path 36"
                                    d="M110.983 51.116l-6.212-6.385a1.335 1.335 0 00-.988-.423 1.281 1.281 0 00-.988.423L59.758 88.085 44.095 72.423a1.364 1.364 0 00-1.975 0l-6.279 6.278a1.406 1.406 0 000 2.011l19.755 19.755a6.247 6.247 0 004.127 2.011 6.546 6.546 0 004.092-1.94h.035l47.165-47.412a1.508 1.508 0 00-.032-2.01z"
                                />
                                <Path
                                    data-name="Path 37"
                                    d="M73.375 9.877a63.508 63.508 0 0144.907 108.4 63.508 63.508 0 01-89.814-89.809A63.077 63.077 0 0173.375 9.877m0-9.877a73.375 73.375 0 1073.375 73.375A73.364 73.364 0 0073.375 0z"
                                />
                            </G>
                        </Svg>

                        <Text>Tag gekoppeld</Text>
                        <Text>ID: {this.state.tagValue}</Text>
                    </View>
                    }

                    <View style={globalStyles.buttonContainer}>
                        <TouchableOpacity
                            style={globalStyles.button}
                            onPress={this._test}>
                            <Text style={globalStyles.buttonText}>Koppel een nieuwe tag</Text>
                        </TouchableOpacity>
                    </View>
                </View>


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
    pageContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1
    },
    scanButton: {
        // flex: 1,
        alignSelf: 'flex-end',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    statusImage: {
        width: 150,
        height: 150,
        marginBottom: 20
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