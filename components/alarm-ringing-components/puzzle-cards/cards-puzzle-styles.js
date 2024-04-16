import { StyleSheet } from "react-native";

export const cardsPuzzlePageStyles = StyleSheet.create({
    cardsContainer: {
        backgroundColor: 'rgba(244, 240, 240, 1)',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '98%',
    },
    taskDescription: {
        fontSize: 24,
        fontFamily: 'lato-medium',
        marginTop: 20
    },
    cards: {
        marginTop: 25,
        flexDirection: 'row',
        width: '98%',
        display: 'flex',
        gap: 5,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20
    }
})