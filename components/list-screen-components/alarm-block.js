
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useRef } from 'react'
import SwitchButton from '../common-components/switch-button';
import { styles as alarmBlockStyles } from './styles/alarm-block-styles';

export default function AlarmBlock({description, alarmTime, alarmDays}) {

    const switchAlarmMode = (hasBeenEnabled) => {
    };

  return (
    <Pressable style={alarmBlockStyles.pressArea}>
        <View style={alarmBlockStyles.alarmBlock}>
            <View style={alarmBlockStyles.info}>
                <Text style={alarmBlockStyles.description}>{description}</Text>
                <Text style={alarmBlockStyles.alarmTime}>{alarmTime}</Text>
                <Text style={alarmBlockStyles.alarmDays}>{alarmDays}</Text>
            </View>
            <View style={alarmBlockStyles.switchButton}>
                <SwitchButton onPress={switchAlarmMode} initialColor={"rgba(201, 201, 201, 1)"} enabledColor={"rgba(224, 132, 171, 1)"}
                initialText={"X"} enabledText={"✓"}/>
            </View>
        </View>
    </Pressable>
  )
}

