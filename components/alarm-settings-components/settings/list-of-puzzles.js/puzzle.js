
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { NAME_OF_DAY_OF_WEEK } from '../../../../const';
import { vw } from 'react-native-expo-viewport-units';


export default function Puzzle(props) {
    const { value, onPress, isSelected } = props;
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