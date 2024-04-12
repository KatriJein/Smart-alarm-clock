import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { vw } from "react-native-expo-viewport-units";

export const statisticsScreenStyles = StyleSheet.create({
    scrollContainer: {
        width: "100%",
        padding: 10,
    },
    // scrollContainerContent: {
    //     // alignItems: "center",

    // },
    title: {
        fontSize: 38,
        fontFamily: 'montserrat-alt-medium',
    },
    general: {
        fontSize: 20,
        fontFamily: 'montserrat-alt-medium',
    },
    periodSelect: {
        alignSelf: "flex-start",
    },
    sleepChart: {
        alignSelf: "center",
        marginVertical: vw(5),
        left: -8
    },
    sleepQualityChart: {
        alignSelf: "center",
        marginVertical: vw(5),
        left: -15
    },
    containerText: {
        flexDirection: 'row', 
        flex: 1, 
        alignItems: 'center', 
        width: '99%',
        marginVertical: vw(1),
    },
    header: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})