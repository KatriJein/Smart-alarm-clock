import { alarmTitleStyles } from "./styles/alarm-title-styles";
import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, TextInput } from 'react-native';
import React from 'react';

export default function AlarmTitle(props) {
  const { title, changeOption } = props;

  return (
    <Pressable style={alarmTitleStyles.container}>
      <View style={alarmTitleStyles.titleView}>
        <TextInput onChangeText={(value) => changeOption(value)}
          style={alarmTitleStyles.title} maxLength={15}>{title}</TextInput>
        <Ionicons name="pencil" style={[alarmTitleStyles.pencil]} size={26} color="black" />
      </View>
    </Pressable>
  )
}