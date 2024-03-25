
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { styles as alarmsBarStyles } from './styles/alarms-bar-styles'

export default function AlarmsBar() {
  return (
    <View style={alarmsBarStyles.alarmsBar}>
      <Pressable style={alarmsBarStyles.pressable}>
        <Text style={alarmsBarStyles.toMainText}>{`<`} На главную</Text>
      </Pressable>
      <Pressable style={alarmsBarStyles.pressable}>
        <Text style={alarmsBarStyles.addText}>+</Text>
      </Pressable>
    </View>
  )
}
