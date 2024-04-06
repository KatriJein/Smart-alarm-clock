
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { NAME_OF_DAY_OF_WEEK } from '../../../../const';
import Day from './day';
import { vw } from 'react-native-expo-viewport-units';

export default function ListOfDays(props) {
    const {selectedDays, onPress} = props;
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Повтор</Text>
            <View style={styles.containerList}>{Object.entries(NAME_OF_DAY_OF_WEEK).map(([key, value]) => (<Day key={key} onPress={() => onPress(key)} isSelected={selectedDays[key]} id={key} value={value} />))}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 'auto',
        borderRadius: 13,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        fontFamily: 'kyiv-type',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(6.5)),
        paddingHorizontal: 10,
        paddingTop: 6
    },
    description: {
        fontSize: Math.round(vw(4.5)),
        marginTop: '0.5%'
    },
    containerList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'center',
        margin: 10,
    },
});


