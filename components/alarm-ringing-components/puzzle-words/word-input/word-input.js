
import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { wordInputStyles } from './word-input-styles'
import PushAnswer from '../../../common-components/push-answer'

export default function AnswerInput({word, setIsCorrect}) {

    const [text, setText] = useState("");
    const [wrong, setIsWrong] = useState(false);
    const [canSendAnswer, setCanSendAnswer] = useState(true);

    const onTextInput = (text) => {
        setText(text);
    }

    const onAnswerSent = () => {
        if (text.toLowerCase() === word.toLowerCase()) {
            setCanSendAnswer(false);
            setIsCorrect(prev => prev + 1);
            setIsWrong(false);
        }
        else {
            setIsWrong(true);
        }
    }

  return (
    <View style={wordInputStyles.container}>
        <View style={[wordInputStyles.inputView, wrong ? {borderColor: 'rgba(255, 0, 0, 0.75)'}
        : canSendAnswer ? {} : {borderColor: 'rgba(25, 195, 41, 0.8)'}]}>
        <TextInput editable={canSendAnswer} style={wordInputStyles.input} placeholder={word} onChangeText={(text) => onTextInput(text)}/>
        <PushAnswer inputValue={text} onAnswerSent={onAnswerSent} canSendAnswer={canSendAnswer}/>
        </View>
        {wrong ? <Text style={wordInputStyles.wrongInputWarning}>Неправильно, попробуйте снова</Text> : <></>}

    </View>
  )
}