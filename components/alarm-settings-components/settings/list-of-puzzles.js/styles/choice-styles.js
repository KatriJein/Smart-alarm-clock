import { StyleSheet } from "react-native";

export const choiceStyles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderColor: '#fdddeb',
        backgroundColor: '#fdddeb',
        borderRadius: 13
    },
    text: {
        fontFamily: 'lato-regular',
        fontSize: 18,
        color: '#000'
    }, 
    selected: {
        borderColor: 'white',
        backgroundColor: 'white',
    }
})