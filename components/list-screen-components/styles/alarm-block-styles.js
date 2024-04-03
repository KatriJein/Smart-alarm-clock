import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pressArea: {
        marginTop: 20,
    },
    alarmBlock: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 25,
        display: "flex",
        flexDirection: "row"
    },
    info: {
        width: "50%"
    },
    switchButton: {
        width: "50%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    description: {
        color: "rgba(110, 110, 110, 1)",
        fontFamily: "lato-regular",
        marginLeft: 15,
        marginTop: 10,
        fontSize: 16
    },
    alarmTime: {
        fontSize: 38,
        marginLeft: 15,
        marginTop: 2,
        fontFamily: "lato-medium"
    },
    alarmDays: {
        color: "rgba(110, 110, 110, 1)",
        marginLeft: 15,
        marginTop: 2,
        fontSize: 18,
        fontFamily: "lato-regular",
        marginBottom: 10
    }
})