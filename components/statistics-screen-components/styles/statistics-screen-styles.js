import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { vw } from "react-native-expo-viewport-units";

export const statisticsScreenStyles = StyleSheet.create({
    scrollContainer: {
        width: vw(98),
        padding: 10,
        backgroundColor: '#f7e3e7',
        borderRadius: 15
    },
    title: {
        fontSize: 38,
        fontFamily: 'montserrat-alt-medium',
    },
    general: {
        fontSize: 20,
        fontFamily: 'montserrat-alt-medium',
    },
    periodSelect: {
        alignSelf: "center",
        marginBottom: 10,
        marginTop: -10
    },
    sleepChart: {
        alignSelf: "center",
        marginVertical: vw(2),
        backgroundColor: 'white',
        borderRadius: 15,
        width: vw(95)
    },
    sleepQualityChart: {
        alignSelf: "center",
        marginVertical: vw(2),
        backgroundColor: 'white',
        borderRadius: 15,
        width: vw(95)
    },
    containerText: {
        flexDirection: 'row', 
        flex: 1, 
        alignItems: 'center', 
        width: '98%',
        marginVertical: vw(1),
    },
    header: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    changed: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        padding: 10,
        borderRadius: 20
    }
})