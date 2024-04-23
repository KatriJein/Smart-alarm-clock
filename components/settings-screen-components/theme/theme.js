import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { choiceStyles } from '../../alarm-settings-components/settings/list-of-puzzles.js/styles/choice-styles'

export default function Theme({name, onChange, isSelected}) {
  return (
    <TouchableOpacity onPress={() => onChange(name)} style={[choiceStyles.container, additionalStyles.additional, isSelected ? choiceStyles.selected : null]}>
    <Text style={choiceStyles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const additionalStyles = StyleSheet.create({
    additional: {
        marginBottom: 20
    }
})