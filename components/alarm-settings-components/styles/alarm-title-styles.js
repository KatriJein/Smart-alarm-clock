import { StyleSheet } from "react-native";

export const alarmTitleStyles = StyleSheet.create({
    container: {
        width: 233,
        height: 44,
        borderRadius: 25,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        marginTop: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 28,
    },
    titleView: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    pencilImage: {
        marginLeft: 20
    }
})