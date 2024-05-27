import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { vw } from 'react-native-expo-viewport-units';

export default function StatList({ optionTitle, optionDescription, color }) {
    if (optionDescription.length > 0) {
        return (
            <View style={styles.container}>
                <View style={styles.optionTitle}>
                    <Text style={[styles.text, styles.textTitle]}>{optionTitle}:</Text>
                </View>
                <View style={styles.optionDesc}>
                    {optionDescription.map((item) => (<Text style={[styles.text, styles.textDesc, { color: color }]} key={item}>{item}</Text>))}
                </View>
            </View>
        )
    } else {
        return ``;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: vw(1.5),
    },
    optionTitle: {
        width: '100%',
    },
    optionDesc: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: 2,
        paddingVertical: 3,
    },
    text: {
        fontFamily: 'lato-medium',
    },
    textTitle: {
        fontSize: 20
    },
    textDesc: {
        fontSize: 24,
    }
});