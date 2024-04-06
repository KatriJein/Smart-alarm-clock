
import { View, Text, StyleSheet, Pressable, Vibration } from 'react-native'
import React, { useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Vibration } from 'react-native';
import React, { useRef } from 'react';
import SwitchButton from '../common-components/switch-button';
import { styles as alarmBlockStyles } from './styles/alarm-block-styles';
import enabledOption from "../../assets/enabledOption.png";
import disabledOption from "../../assets/disabledOption.png";
import { useNavigation } from '@react-navigation/native';
import { Audio } from "expo-av"
import * as Notifications from "expo-notifications"
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { updateSound } from '../AlarmSound';
import { CalculateSecondsToRing, scheduleAlarm } from '../common-functions/CommonFunctions';
import { humanizeListOfDays } from '../../const';


export default function AlarmBlock(props) {
    const { alarm } = props;
    const switchAlarmMode = async (hasBeenEnabled) => {
        if (hasBeenEnabled) {
            let seconds = CalculateSecondsToRing("14:30", [4]);
            await updateSound("rain.mp3", true, [3000, 4000, 3000, 4000]);
            const res = await scheduleAlarm("xd", "xd", seconds);
            };
    }
    const navigation = useNavigation();

    return (
        <Pressable style={alarmBlockStyles.pressArea} onPress={() => navigation.navigate('Alarm details', { alarm })}>
            <View style={alarmBlockStyles.alarmBlock}>
                <View style={alarmBlockStyles.info}>
                    <Text style={alarmBlockStyles.description}>{alarm.name}</Text>
                    <Text style={alarmBlockStyles.alarmTime}>{alarm.time}</Text>
                    {alarm.days.length > 0 ? <Text style={alarmBlockStyles.alarmDays}>{humanizeListOfDays(alarm.days)}</Text> : null}
                </View>
                <View style={alarmBlockStyles.switchButton}>
                    <SwitchButton onPress={switchAlarmMode} initialColor={"rgba(201, 201, 201, 1)"} enabledColor={"rgba(224, 132, 171, 1)"}
                        initialSign={disabledOption} enabledSign={enabledOption} width={89} height={44} circleSize={36} />
                </View>
            </View>
        </Pressable>
    )
}

