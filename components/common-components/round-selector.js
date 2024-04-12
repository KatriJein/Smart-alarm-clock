
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { roundSelectorStyles } from './styles/round-selector-styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function RoundSelector({ options, optionIndex, onOptionPress }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onOptionPress()}>
      <View style={roundSelectorStyles.container}>
        <Ionicons name="chevron-back-outline" size={25} color="black" />
        <Text style={roundSelectorStyles.text}>{options[optionIndex]}</Text>
        <Ionicons name="chevron-forward-outline" size={25} color="black" />
      </View>
    </TouchableOpacity>
  )
}
