
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { choiceStyles } from './styles/choice-styles'

export default function Amount({value, isSelected, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={[choiceStyles.container, isSelected ? choiceStyles.selected : null]}>
        <Text style={choiceStyles.text}>{value}</Text>
    </TouchableOpacity>
  )
}