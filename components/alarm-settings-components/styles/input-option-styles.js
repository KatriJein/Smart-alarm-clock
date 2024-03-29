import { StyleSheet } from "react-native";

export const inputOptionStyles = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 24,
        fontFamily: 'lato-regular'
    },
    textInput: {
        fontSize: 24,
        color: 'rgba(158, 158, 158, 1)',
        textAlign: "right",
        fontFamily: 'lato-regular'
    }
})