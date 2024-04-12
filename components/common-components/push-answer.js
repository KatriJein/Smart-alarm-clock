
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { pushAnswerStyles } from './styles/push-answer-styles'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PushAnswer({inputValue, onAnswerSent, canSendAnswer=true}) {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (inputValue === "") {
        setIsActive(false);
    }
    else {
        setIsActive(true);
    }
  }, [inputValue])

  useEffect(() => {
    if (!canSendAnswer) {
      setIsActive(false);
    }
  }, [canSendAnswer])

  return (
    <TouchableOpacity disabled={!isActive} onPress={() => onAnswerSent()}>
        <View style={[pushAnswerStyles.button, isActive ? {backgroundColor: 'rgba(213, 88, 141, 1)'} : {}]}>
            <Ionicons name="arrow-up" size={35} color={'rgba(255, 255, 255, 1)'}/>
        </View>
    </TouchableOpacity>
  )
}