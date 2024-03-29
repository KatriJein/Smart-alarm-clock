import { StyleSheet } from "react-native";

export const settingOptionStyles = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    optionName: {
        fontSize: 24,
        fontFamily: 'lato-regular'
    },
    optionChoice: {
        fontSize: 24,
        fontFamily: 'lato-regular',
        marginRight: 10
    },
    choiceView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})