
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { NAME_OF_DAY_OF_WEEK } from '../../../../const';
import { vw } from 'react-native-expo-viewport-units';

function initDays(selectedDays) {
    const days ={};
    Object.keys(NAME_OF_DAY_OF_WEEK).forEach(item => {
        if (selectedDays.includes(item)) {
            days[item] = true;
        } else {
            days[item] = false;
        }
    })
    return days;
}

export default function Day(props) {
    const { id, onPress, isSelected, value } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, isSelected ? styles.selected : null]}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderColor: '#fdddeb',
        backgroundColor: '#fdddeb',
        borderRadius: 13
    },
    text: {
        fontFamily: 'kyiv-type',
        fontSize: 18,
        color: '#000'
    }, 
    selected: {
        borderColor: 'white',
        backgroundColor: 'white',
    },
});