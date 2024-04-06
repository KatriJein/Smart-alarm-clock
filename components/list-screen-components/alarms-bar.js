
import { View, Text, StyleSheet, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles as alarmsBarStyles } from './styles/alarms-bar-styles'
import plusAdd from "../../assets/alarmAdd.png"
import { useNavigation } from '@react-navigation/native'

export default function AlarmsBar() {

  const navigation = useNavigation();

  return (
    <View style={alarmsBarStyles.alarmsBar}>
      <TouchableOpacity style={alarmsBarStyles.pressable} onPress={() => navigation.navigate("Alarm details", {alarm: null})}>
        <Image source={plusAdd}></Image>
      </TouchableOpacity>
    </View>
  )
}

//<Pressable style={alarmsBarStyles.pressable}>
  //<Text style={alarmsBarStyles.toMainText}>{`<`} На главную</Text>
//</Pressable>