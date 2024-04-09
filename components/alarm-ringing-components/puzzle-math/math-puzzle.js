
import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MathPuzzlePageStyles } from './math-puzzle-styles'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import Ionicons from "@expo/vector-icons/Ionicons"
import AnswerInput from '../puzzle-words/word-input/word-input'
import { useNavigation } from "@react-navigation/native"
import { createMathProblem } from './common/MathFunctions'

export default function MathPuzzle({amount=5}) {

    const navigation = useNavigation();
    const [problemAmount, setProblemAmount] = useState(amount);
    const [solved, setSolved] = useState(0);
    const [problem, setProblem] = useState("");
    const [result, setResult] = useState("");
    const [askedSwitching, setAskedSwitching] = useState(0);

    const updateProblem = () => {
       let [mathProblem, resultValue] = createMathProblem();
       setProblem(mathProblem);
       setResult(resultValue.toString()); 
    }

    const askSwitchingPicture = () => {
        let nextValue = askedSwitching + 1;
        setAskedSwitching(nextValue);
        if (nextValue % 2 === 0) {
            setProblemAmount(prev => prev + 1);
        }
        updateProblem();
    }

    const onProblemSolved = () => {
        setSolved(prev => prev + 1);
        updateProblem();
    }

    useEffect(() => {
       updateProblem();
    }, [])

    useEffect(() => {
        if (solved >= problemAmount) {
            setTimeout(() => {
                navigation.navigate("RingPage", {canStop: true})
            }, 500)
        }
    }, [solved])


  return (
    <Gradient>
        <View style={commonStyles.container}>
            <View style={MathPuzzlePageStyles.problemView}>
                <Text style={MathPuzzlePageStyles.remainingProblems}>Осталось примеров: {problemAmount - solved}</Text>
                <View style={MathPuzzlePageStyles.mathProblemView}>
                    <View style={MathPuzzlePageStyles.mathProblemPicture}>
                        <Text style={MathPuzzlePageStyles.problemText}>{problem}</Text>
                    </View>
                    <Pressable style={MathPuzzlePageStyles.switchPicture} onPress={() => askSwitchingPicture()}>
                        <Ionicons name="refresh" size={17} />
                        <Text style={MathPuzzlePageStyles.switchPictureText}>Поменять картинку</Text>
                    </Pressable>
                    <View style={MathPuzzlePageStyles.answerInput}>
                        <AnswerInput callback={onProblemSolved} word={result} showAnswer={false} shouldLockAnswering={false}/>
                    </View>
                </View>
            </View>
        </View>
    </Gradient>
  )
}