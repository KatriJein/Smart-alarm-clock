
import { View, Text, StyleSheet, Button, Pressable, Image } from 'react-native'
import React from 'react'
import { styles as alarmsBarStyles } from './styles/alarms-bar-styles'
import plusAdd from "../../assets/alarmAdd.png"

export default function AlarmsBar() {
  return (
    <View style={alarmsBarStyles.alarmsBar}>
      <Pressable style={alarmsBarStyles.pressable}>
        <Image source={plusAdd}></Image>
      </Pressable>
    </View>
  )
}

//<Pressable style={alarmsBarStyles.pressable}>
  //<Text style={alarmsBarStyles.toMainText}>{`<`} На главную</Text>
//</Pressable>