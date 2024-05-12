
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles as alarmsBarStyles } from './styles/alarms-bar-styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function AlarmsBar() {

  const navigation = useNavigation();

  return (
    <View style={alarmsBarStyles.alarmsBar}>
      <TouchableOpacity style={alarmsBarStyles.pressable} onPress={() => navigation.navigate("Alarm details", {alarm: null})}>
        <Ionicons name="add" size={40} color="black" />
      </TouchableOpacity>
    </View>
  )
}
