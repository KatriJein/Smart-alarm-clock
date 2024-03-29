
import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { inputOptionStyles } from '../styles/input-option-styles'

export default function InputOption({optionTitle, placeholder, description, setDescription}) {

    const onTextChange = (text) => {
        if (text === "") {
            setDescription(placeholder);
        }
        else {
            setDescription(text);
        }
    }

  return (
    <View style={inputOptionStyles.container}>
      <Text style={inputOptionStyles.title}>{optionTitle}:</Text>
      <TextInput onChangeText={(text) => onTextChange(text)} placeholder={placeholder} style={inputOptionStyles.textInput}>{description}</TextInput>
    </View>
  )
}