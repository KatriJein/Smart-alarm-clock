
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SOUND_NAMES } from '../../../../const'
import Song from './song'

export default function SongsList({onChange, currentOption}) {
  return (
    <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.scrollList}>
            {SOUND_NAMES.map((sound) => <Song key={sound} name={sound} isSelected={currentOption === sound} onChange={onChange}/>)}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    list: {
        width: '95%',
        height: '70%',
    },
    scrollList: {
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})