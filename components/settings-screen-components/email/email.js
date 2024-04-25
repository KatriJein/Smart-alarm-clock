import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Email({email, onChange}) {
    return (
    <View style={styles.container}>
      <Text style={styles.label}>Почта:</Text>
      <TextInput onChangeText={(text) => onChange(text)} defaultValue={email} placeholder='alarm@mail.ru' style={styles.emailInput}/>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 32,
        fontFamily: 'lato-medium',
    },
    container: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailInput: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'lato-medium',
        textAlign: 'center',
        marginTop: 20
    },
})