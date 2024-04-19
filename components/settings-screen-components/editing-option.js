import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function EditingOption({optionTitle, currentOption}) {

  return (
    <View style={styles.container}>
      <Text style={styles.optionName}>{optionTitle}:</Text>
      <TouchableOpacity style={styles.choiceView}>
        <Text style={styles.optionChoice}>{currentOption}</Text>
        <Ionicons name="pencil" style={styles.pencil} size={26} color="black" />
      </TouchableOpacity>
    </View>
  )
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    optionName: {
        width: 'auto',
        fontSize: 24,
        fontFamily: 'lato-regular'
    },
    optionChoice: {
        width: '88%',
        fontSize: 18,
        fontFamily: 'lato-regular',
    },
    choiceView: {
        width: '65%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    pencil: {
        position: 'absolute',
        right: -2
    }
})