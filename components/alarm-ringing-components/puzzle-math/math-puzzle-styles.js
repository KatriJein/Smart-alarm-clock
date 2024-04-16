import { StyleSheet } from "react-native";

export const MathPuzzlePageStyles = StyleSheet.create({
    problemView: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    remainingProblems: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 32,
        fontFamily: 'lato-medium',
        marginBottom: 15
    },
    mathProblemView: {
        backgroundColor: 'rgba(244, 240, 240, 1)',
        width: '95%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center'
    },
    mathProblemPicture: {
        marginTop: 20,
        width: '95%',
        borderRadius: 5,
        height: 122,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    problemText: {
        fontSize: 30,
        fontFamily: 'lato-medium'
    },
    switchPicture: {
        marginTop: 10,
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    switchPictureText: {
       marginLeft: 5,
       fontSize: 15,
       fontFamily: 'lato-medium'
    },
    answerInput: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center'
    }
})