import { StyleSheet } from "react-native";

export const passwordPuzzlePageStyles = StyleSheet.create({
    label: {
        fontSize: 32,
        fontFamily: 'lato-medium'
    },
    passwordView: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    passwordInput: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'lato-medium',
        textAlign: 'center'
    },
    icon: {
        marginLeft: 10
    },
    dontRememberPasswordView: {
        borderWidth: 1,
        backgroundColor: 'rgba(234, 194, 235, 1)',
        borderRadius: 15,
        padding: 10,
        marginTop: 50
    },
    forgotPasswordBtn: {
        fontSize: 20,
        fontFamily: 'lato-medium'
    }
})