
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Phone({phone, onChange}) {

    const updatePhone = (phone) => {
        let cleanedPhone = phone.replace(/\D/g, '').slice(1);
        const countryCode = "+7";
        const areaCode = cleanedPhone.slice(0, 3);
        const firstPart = cleanedPhone.slice(3, 6);
        const secondPart = cleanedPhone.slice(6, 8);
        const thirdPart = cleanedPhone.slice(8, 10);
        onChange(`${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`);
    }

    return (
    <View style={styles.container}>
      <Text style={styles.label}>Номер телефона:</Text>
      <TextInput maxLength={18} onChangeText={(text) => updatePhone(text)} defaultValue={phone} keyboardType='number-pad' placeholder='+7 (993) 015-95-70' style={styles.phoneInput}/>
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
    phoneInput: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'lato-medium',
        textAlign: 'center',
        marginTop: 20
    },
})