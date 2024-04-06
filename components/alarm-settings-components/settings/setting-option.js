
import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { settingOptionStyles } from '../styles/setting-option-styles';
import nextArrow from "../../../assets/nextArrow.png";
import { Ionicons } from '@expo/vector-icons';

export default function SettingChoiceOption({optionTitle, currentOption, onChoiceStart, onChoiceFinish}) {

  return (
    <View style={settingOptionStyles.container}>
      <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
      <Pressable style={settingOptionStyles.choiceView}>
        <Text style={settingOptionStyles.optionChoice}>{currentOption}</Text>
        <Ionicons style={settingOptionStyles.arrow} name="chevron-forward-outline" size={25} color="black" />
      </Pressable>
    </View>
  )
}