import { StyleSheet } from "react-native";

export const timeSelectStyles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: 204,
        display: "flex",
        alignItems: "center"
    },
    timeRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },
    timeRowOther: {
        fontSize: 36
    },
    otherTime: {
        fontSize: 36,
        color: "rgba(98, 98, 98, 1)"
    },
    currentTime: {
        fontSize: 48
    }
})