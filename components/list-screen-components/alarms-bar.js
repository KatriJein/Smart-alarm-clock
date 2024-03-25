
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

export default function AlarmsBar() {
  return (
    <View style={styles.alarmsBar}>
      <Pressable style={styles.pressable}>
        <Text style={styles.toMainText}>{`<`} На главную</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    alarmsBar: {
        marginTop: 44,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        verticalAlign: "middle"
    },
    pressable: {
        display: "flex",
        justifyContent: "center",
    },
    toMainText: {
        fontSize: 24
    },
    addText: {
        fontSize: 27
    }
})