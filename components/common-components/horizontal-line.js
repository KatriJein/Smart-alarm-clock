
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HorizontalLine() {
  return (
    <View style={styles.line}>
    </View>
  )
}

const styles = StyleSheet.create({
    line: {
        width: "100%",
        borderBottomColor: "rgba(225, 211, 211, 1)",
        borderBottomWidth: 1
    }
})