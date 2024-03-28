
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { roundSelectorStyles } from './styles/round-selector-styles'
export default function RoundSelector({options, optionIndex, onOptionPress}) {
  return (
    <Pressable onPress={() => onOptionPress()}>
        <Text style={roundSelectorStyles.text}>{`<`}{options[optionIndex]}{`>`}</Text>
    </Pressable>
  )
}