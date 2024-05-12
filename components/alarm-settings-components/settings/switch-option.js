import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SwitchButton from '../../common-components/switch-button';
import { switchOptionStyles } from '../styles/switch-option-styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SwitchOption({ optionName, onPress, isEnabled }) {
  return (
    <View style={switchOptionStyles.container}>
      <Text style={switchOptionStyles.optionName}>{optionName}:</Text>
      <SwitchButton style={styles.switch} initialSign={<Ionicons name="close-outline" size={20} color="black" />} enabledSign={<Ionicons name="checkmark-outline" size={20} color="black" />} width={65} height={32} circleSize={24}
        initialColor='rgba(180, 180, 180, 1)' enabledColor='rgba(237, 156, 190, 1)' onPress={onPress} isEnabled={isEnabled} />
    </View>
  )
}

const styles = StyleSheet.create({
  switch: {
    marginRight: 5
  }
});