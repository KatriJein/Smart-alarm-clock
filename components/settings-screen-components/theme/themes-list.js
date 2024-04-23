import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { THEMES } from '../../../const'
import Theme from './theme'

export default function ThemesList({onChange, currentOption}) {
  return (
    <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.scrollList}>
            {THEMES.map((theme) => <Theme key={theme} name={theme} isSelected={currentOption === theme} onChange={onChange}/>)}
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