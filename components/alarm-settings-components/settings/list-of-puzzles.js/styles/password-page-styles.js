import { StyleSheet } from "react-native";

export const passwordPageStyles = StyleSheet.create({
    title: {
        fontFamily: 'kyiv-type',
        fontSize: 26,
    },
    passwordInput: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'kyiv-type',
        textAlign: 'center',
        marginTop: 20
    },
    passView: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rulesView: {
        marginTop: 40,
        width: '95%',
        display: 'flex',
        alignItems: 'center'
    }
})