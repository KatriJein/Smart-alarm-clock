import { StyleSheet } from "react-native";

export const alarmTitleStyles = StyleSheet.create({
    container: {
        width: '80%',
        height: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        marginTop: 15,
        display: "flex",
        // justifyContent: "center",
        alignItems: "center"
    },
    title: {
        width: '85%',
        fontSize: 26,
        fontFamily: 'montserrat-alt-medium',
        textAlign: 'center'
    },
    titleView: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row"
    },
    pencil: {
        position: 'absolute',
        right: 1
    }
})