import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { vw } from 'react-native-expo-viewport-units';

export default function StatOption({ optionTitle, optionDescription }) {
    return (
        <View style={styles.container}>
            <View style={styles.optionTitle}>
                <Text style={[styles.text, styles.textTitle]}>{optionTitle}:</Text>
            </View>
            <View style={styles.optionDesc}>
                <Text style={[styles.text, styles.textDesc]}>{optionDescription}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginVertical: vw(1.5),
    },
    optionTitle: {
        width: '75%',
        fontSize: vw(8)
    },
    optionDesc: {
        width: '25%',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'lato-medium',
    },
    textTitle: {
        fontSize: 20
    },
    textDesc: {
        fontSize: 24,
        textAlign: 'right',
        color: '#2A4192'
    }
});