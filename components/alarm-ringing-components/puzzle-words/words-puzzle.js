
import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import { wordsPuzzlePageStyles } from './words-puzzle-styles'
import AnswerInput from './word-input/word-input'
import { INPUT_WORDS } from '../../../const'
import { shuffle } from '../../common-functions/CommonFunctions'
import { useNavigation } from "@react-navigation/native"

export default function WordsPuzzle({route}) {

  const { amount } = route.params;
  const navigation = useNavigation();
  const [words, setWords] = useState([]);
  const [correct, setIsCorrect] = useState(0);

  const onCorrectAnswer = () => {
    setIsCorrect(prev => prev + 1);
  }

  useEffect(() => {
    const words = [...INPUT_WORDS];
    shuffle(words);
    let selectedWords = words.slice(0, amount).map((word, index) => ({id: index, word}));
    setWords(selectedWords);
  }, [])

  useEffect(() => {
    if (correct === amount) {
        setTimeout(() => {
            navigation.navigate("RingPage", {canStop: true})
        }, 500)
    }
  }, [correct])

  return (
    <Gradient>
        <View style={commonStyles.container}>
            <Text style={wordsPuzzlePageStyles.taskDescription}>Правильно введи все слова!</Text>
            <ScrollView contentContainerStyle={wordsPuzzlePageStyles.scrollContainer}>
                {words.length > 0 && words.map(word => <AnswerInput key={word.id} word={word.word} callback={onCorrectAnswer}/>)}
            </ScrollView>
        </View>
    </Gradient>
  )
}