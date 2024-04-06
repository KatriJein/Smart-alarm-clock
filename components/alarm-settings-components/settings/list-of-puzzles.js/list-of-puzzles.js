
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Puzzle from './puzzle';
import { vw } from 'react-native-expo-viewport-units';

export default function ListOfPuzzles(props) {
    const {puzzles, onPress, title, selectedPuzzle} = props;
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <View style={styles.containerList}>{puzzles.map((item) => (<Puzzle key={item} onPress={() => onPress(item)} isSelected={selectedPuzzle === item} value={item}/>))}</View>
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
        gap: 10,
        justifyContent: 'center',
        margin: 10,
    },
});