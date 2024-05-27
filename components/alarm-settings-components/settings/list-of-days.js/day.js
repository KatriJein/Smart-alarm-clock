
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Day(props) {
    const { onPress, isSelected, value } = props;
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
        fontFamily: 'lato-regular',
        fontSize: 18,
        color: '#000'
    }, 
    selected: {
        borderColor: 'white',
        backgroundColor: 'white',
    },
});