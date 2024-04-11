
import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import * as Notifications from "expo-notifications"
import { stopAlarm } from '../../common-functions/CommonFunctions'
import { ringPageStyles } from './ring-page-styles'
import { useDispatch, useSelector } from "react-redux"
import { getNotificationId } from '../../CurrentNotification'
import { CORRELATE_PAGES } from '../../../const'
import { interruptSound } from '../../AlarmSound'

export default function RingPage({navigation, route}) {
    const params = route.params;
    const alarmsList = useSelector(state => state.alarms.alarms);
    const [correspondingAlarm, setCorrespondingAlarm] = useState(null);
    const [pageText, setPageText] = useState("Отключить >>");
    const [puzzlePage, setPuzzlePage] = useState("");
    const [beenToPuzzle, setBeenToPuzzle] = useState(false);
    const stopRinging = async () => {
        if (puzzlePage === "" || params) {
          setPageText("Останавливаю...");
          await stopAlarm();
        }
        else {
          if (correspondingAlarm.neighbourOption && !beenToPuzzle) {
            await interruptSound();
          }
          navigation.navigate(puzzlePage, {password: correspondingAlarm.password, amount: correspondingAlarm.puzzleAmount});
          setBeenToPuzzle(true);
        }
    }

    useEffect(() => {
      for (let key of Object.keys(alarmsList)) {
        let alarm = alarmsList[key];
        if (alarm.notificationId === getNotificationId()) {
          setCorrespondingAlarm(alarm);
          setPuzzlePage(CORRELATE_PAGES[alarm.puzzle]);
        }
      }
    }, [])

  return (
    <Gradient>
        <View style={[commonStyles.container, ringPageStyles.myContainer]}>
        <Text style={ringPageStyles.wakeTime}>{correspondingAlarm?.time}</Text>
        <Text style={ringPageStyles.description}>{correspondingAlarm?.description}</Text>
        <Pressable onPress={async () => stopRinging()}>
            <Text style={ringPageStyles.wakeUp}>{pageText}</Text>
        </Pressable>
        </View>
    </Gradient>
  )
}