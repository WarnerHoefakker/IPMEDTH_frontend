import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Image} from 'react-native';
import Gauge from "../charts/Gauge";
import Prediction from "../room-detail/Prediction";
import PeopleAndCO2 from "../room-detail/PeopleAndCO2";
import globalStyles from "../../assets/style/globalStyle";
import {getRoomHistory, getRoomPrediction, getRoomCurrentStatus} from "../../api/roomsAPI";
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CurrentPeopleAmount from "../room-detail/CurrentPeopleAmount";
import CurrentCo2Level from "../room-detail/CurrentCO2Level";

class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        const colorList = {
            LC4: 'orange',
            LC5: 'purple',
            LC6: 'green',
            LC7: 'blue'
        }

        this.color = colorList[this.props.route.params.levelName]

        this.state = {
            co2Value: 0,
            peopleAmount: 0,
            maxPeopleAmount: 0,
            pageLoading: true,
            loadingItems: {
                prediction: true,
                history: true,
                // currentStatus: true
            },
            historyData: {},
            predictionData: {},
        }
    }

    componentDidMount() {
        this.getData();
        this.dataUpdateInterval = setInterval(() => {
            this.getData();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.dataUpdateInterval);
    }

    getData(){
        getRoomCurrentStatus(this.props.route.params.roomId).then((response) => {
            this.setState({co2Value: response.co2.level});
            this.setState({peopleAmount: response.people.people});
            this.setState({maxPeopleAmount: response.people.max});
        });

        getRoomPrediction(this.props.route.params.roomId).then((response) => {
            this.setState({predictionData: response});
            this.setLoading("prediction", false);
        });

        getRoomHistory(this.props.route.params.roomId).then((response) => {
            this.setState({historyData: response});
            this.setLoading("history", false);
        });
    }

    setLoading(key, value) {
        let pageLoading = false;
        let loadingItems = this.state.loadingItems;

        loadingItems[key] = value;
        this.setState({loadingItems});

        for(const item in loadingItems) {
            if(loadingItems[item] === true) {
               pageLoading = true
            }
        }

        this.setState({pageLoading})
    }

    render() {
        if(this.state.pageLoading) {
            return (
                <View style={[globalStyles.loadingContainer, globalStyles.loadingHorizontal]}>
                    <ActivityIndicator size="large" color="#247BA0"/>
                </View>
            )
        }

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={globalStyles.page}>
                        <View style={styles.backButton}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Dashboard")}>
                                <View style={styles.imageTextContainer}>
                                    <Image style={styles.backButtonImage} source={require("../../../assets/img/back-icon.png")}></Image>
                                    <Text style={styles.backButtonText}>Terug</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Text style={styles.title}>{this.props.route.params.roomName}</Text>
                        <View style={styles.twoCards}>
                            <View style={styles.containerHalfWidth}>
                                <View style={[globalStyles.card, styles.cardLeft, styles.smallCard]}>
                                    <Text style={[globalStyles.text, globalStyles.cardTitle, styles.cardTitle]}>Bezetting</Text>
                                    <CurrentPeopleAmount
                                        color={this.color}
                                        max={this.state.maxPeopleAmount}
                                        value={this.state.peopleAmount}
                                        size={130}
                                    />
                                </View>
                            </View>

                            <View style={styles.containerHalfWidth}>
                                <View style={[globalStyles.card, styles.cardRight, styles.smallCard]}>
                                    <Text style={[globalStyles.text, globalStyles.cardTitle]}>Luchtkwaliteit</Text>
                                    <CurrentCo2Level
                                        color={this.color}
                                        value={this.state.co2Value}
                                        showLabel={'text'}
                                        size={130}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[globalStyles.card, styles.bigCard]}>
                            <Text style={[globalStyles.text, globalStyles.cardTitle, styles.cardTitle]}> Historie van Bezetting en luchtkwaliteit</Text>
                            <PeopleAndCO2 color={this.color} historyData={this.state.historyData}/>
                        </View>

                        <View style={[globalStyles.card, styles.bigCard]}>
                            <Text style={[globalStyles.text, globalStyles.cardTitle]}>Verwachte bezetting</Text>

                            <Prediction color={this.color} predictionData={this.state.predictionData}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    backButton:{
        position: "absolute",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    imageTextContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    backButtonImage:{
        width: 32,
        height: 32,
        flexDirection: 'row'
    },
    backButtonText:{
        fontSize: 16,
        marginLeft: 5
    },
    smallCard: {
        paddingBottom: 160,
    },
    bigCard:{
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 30,
        marginTop: 50,
    },
    twoCards: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerHalfWidth: {
        width: '50%'
    },
    cardLeft: {
        height: 150,
        marginRight: 7
    },
    cardRight: {
        height: 150,
        marginLeft: 7
    },
    cardTitle: {
        fontSize: 20,
        marginTop: 7,
        marginBottom: 7,
        textAlign: 'center'
    },
    victoryContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: "column",
    }
});

export default RoomDetail;