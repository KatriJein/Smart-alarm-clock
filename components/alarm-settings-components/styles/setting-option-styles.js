import { StyleSheet } from "react-native";

export const settingOptionStyles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    optionName: {
        width: 'auto',
        marginRight: 5,
        fontSize: 24,
        fontFamily: 'lato-regular'
    },
    optionChoice: {
        width: '87%',
        fontSize: 18,
        fontFamily: 'lato-regular',
        marginRight: 10,
        textAlign: 'right',
    },
    choiceView: {
        width: '50%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    arrow: {
        position: 'absolute',
        right: -5
    }
})