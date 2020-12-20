import {StyleSheet, Platform, StatusBar } from 'react-native';

const globalStyles = StyleSheet.create({
    safeAreaView: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    page: {
        backgroundColor: '#EFEFEF',
        padding: 14,
        overflow: 'visible'
    },
    text: {
        color: '#383838',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    title: {
        color: '#383838',
        fontFamily: 'Roboto-Regular',
        fontSize: 24
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 14,
        padding: 8
    },
    cardTitle: {
        fontSize: 20,
        marginBottom: 7
    },
    buttonContainer: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        width: '100%'
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor: '#247BA0',
        width: '100%'
    },
    buttonText: {
        color: '#fff',
        marginBottom: 0
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center"
    },
    loadingHorizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
});

export default globalStyles;