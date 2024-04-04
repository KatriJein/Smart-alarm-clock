
import { View, Text, StyleSheet, Pressable, Vibration } from 'react-native'
import React, { useRef } from 'react'
import SwitchButton from '../common-components/switch-button';
import { styles as alarmBlockStyles } from './styles/alarm-block-styles';
import enabledOption from "../../assets/enabledOption.png"
import disabledOption from "../../assets/disabledOption.png"
import { useNavigation } from '@react-navigation/native';
import { Audio } from "expo-av"
import * as Notifications from "expo-notifications"
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { updateSound } from '../AlarmSound';
import { CalculateSecondsToRing, scheduleAlarm } from '../common-functions/CommonFunctions';



export default function AlarmBlock({description, alarmTime, alarmDays}) {

    const switchAlarmMode = async (hasBeenEnabled) => {
        if (hasBeenEnabled) {
            let seconds = CalculateSecondsToRing(alarmTime, [4]);
            await updateSound("rain.mp3", true, [3000, 4000, 3000, 4000]);
            const res = await scheduleAlarm(description, description, seconds);
            };
    }
    const navigation = useNavigation();

  return (
    <Pressable style={alarmBlockStyles.pressArea} onPress={() => navigation.navigate("AlarmSettings", {alarmTime})}>
        <View style={alarmBlockStyles.alarmBlock}>
            <View style={alarmBlockStyles.info}>
                <Text style={alarmBlockStyles.description}>{description}</Text>
                <Text style={alarmBlockStyles.alarmTime}>{alarmTime}</Text>
                <Text style={alarmBlockStyles.alarmDays}>{alarmDays}</Text>
            </View>
            <View style={alarmBlockStyles.switchButton}>
                <SwitchButton onPress={switchAlarmMode} initialColor={"rgba(201, 201, 201, 1)"} enabledColor={"rgba(224, 132, 171, 1)"}
                initialSign={disabledOption} enabledSign={enabledOption} width={89} height={44} circleSize={36}/>
            </View>
        </View>
    </Pressable>
  )
}

