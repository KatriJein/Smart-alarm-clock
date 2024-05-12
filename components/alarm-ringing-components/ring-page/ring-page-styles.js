import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

export const ringPageStyles = StyleSheet.create({
    container: {
        backgroundColor: '#909090',
        flex: 1,
        padding: 40,
        justifyContent: 'flex-end'
    },
    mainContainer: {
        width: vw(80),
        height: vh(75),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    alarm: {
        width: vw(75),
        height: '75%',
    },
    desc: {
        width: '100%',
        height: 'auto',
        marginTop: 25
    },
    ellipse: {
        width: vw(75),
        height: vw(75),
        borderRadius: 10000,
        borderWidth: 4,
        borderColor: '#FFF0F6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        fontSize: 74,
    },
    text: {
        fontFamily: 'lato-bold',
        color: '#FFF'
    },
    name: {
        fontSize: 24,
        color: '#FFF'
    },
    description: {
        fontSize: 20,
        textAlign: 'center'
    },
    timeContainer: {
        width: '80%',
        alignItems: 'center'
    },
    button: {
        width: vw(22),
        height: vw(22),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sleep: {
        backgroundColor: '#494D76',
    },
    stop: {
        backgroundColor: '#EDB0C9',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})