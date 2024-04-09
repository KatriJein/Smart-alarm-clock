
import { View, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { wordInputStyles } from './word-input-styles'
import PushAnswer from '../../../common-components/push-answer'

export default function AnswerInput({word, callback, showAnswer=true, shouldLockAnswering=true}) {

    const [text, setText] = useState("");
    const [wrong, setIsWrong] = useState(false);
    const [canSendAnswer, setCanSendAnswer] = useState(true);
    const textInputRef = useRef();

    const onTextInput = (text) => {
        setText(text);
    }

    const onAnswerSent = () => {
        if (text.toLowerCase() === word.toLowerCase()) {
            if (shouldLockAnswering) {
                setCanSendAnswer(false);
            }
            else {
                setText("");
                textInputRef.current.clear();
            }
            callback();
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
        <TextInput ref={textInputRef} editable={canSendAnswer} style={wordInputStyles.input} placeholder={showAnswer ? word : "Введите ответ..."}
        onChangeText={(text) => onTextInput(text)}/>
        <PushAnswer inputValue={text} onAnswerSent={onAnswerSent} canSendAnswer={canSendAnswer}/>
        </View>
        {wrong ? <Text style={wordInputStyles.wrongInputWarning}>Неправильно, попробуйте снова</Text> : <></>}

    </View>
  )
}