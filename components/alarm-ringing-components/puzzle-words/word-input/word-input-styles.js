import { StyleSheet } from "react-native";

export const wordInputStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    wrongInputWarning: {
        fontSize: 14,
        fontFamily: 'lato-medium',
        marginLeft: 10,
        marginTop: 2,
        color: 'rgba(255, 0, 0, 1)'
    },
    inputView: {
        width: 330,
        height: 55,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1
    },
    input: {
        width: 265,
        height: 24,
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'lato-medium'
    }
})