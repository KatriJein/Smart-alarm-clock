import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchButton from '../../common-components/switch-button'
import initialSign from "../../../assets/littleDisabledOption.png"
import enabledSign from "../../../assets/littleEnabledOption.png"
import { switchOptionStyles } from '../styles/switch-option-styles'

export default function SwitchOption({optionName, onPress}) {
  return (
    <View style={switchOptionStyles.container}>
      <Text style={switchOptionStyles.optionName}>{optionName}:</Text>
      <SwitchButton style={styles.switch} initialSign={initialSign} enabledSign={enabledSign} width={65} height={32} circleSize={24}
      initialColor='rgba(180, 180, 180, 1)' enabledColor='rgba(237, 156, 190, 1)' onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  switch: {
    marginRight: 5
  }
});