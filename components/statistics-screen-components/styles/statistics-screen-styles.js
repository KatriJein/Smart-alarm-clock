import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";

export const statisticsScreenStyles = StyleSheet.create({
    scrollContainer: {
        width: "95%"
    },
    scrollContainerContent: {
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontFamily: 'kyiv-type',
        marginTop: 105,
    },
    general: {
        fontSize: 20,
        fontFamily: 'kyiv-type'
    },
    periodSelect: {
        alignSelf: "flex-start",
        marginTop: 24,
        marginLeft: 28
    },
    sleepChart: {
        marginTop: 27,
        marginBottom: 44,
    },
    sleepQualityChart: {
        marginTop: 32,
        marginBottom: 32
    },
    statDescription: {
        alignSelf: "flex-start",
        marginLeft: 19,
        marginBottom: 9
    }
})