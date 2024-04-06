
import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import * as Notifications from "expo-notifications"
import { stopAlarm } from '../../common-functions/CommonFunctions'
import { ringPageStyles } from './ring-page-styles'
import { useDispatch, useSelector } from "react-redux"
import { getNotificationId } from '../../CurrentNotification'

export default function RingPage({navigation}) {
    const alarmsList = useSelector(state => state.alarms.alarms);
    const [correspondingAlarm, setCorrespondingAlarm] = useState(null);
    const [pageText, setPageText] = useState("Отключить >>")
    const stopRinging = async () => {
        setPageText("Останавливаю...");
        await stopAlarm();
    }

    useEffect(() => {
      for (let key of Object.keys(alarmsList)) {
        let alarm = alarmsList[key];
        if (alarm.notificationId === getNotificationId()) {
          setCorrespondingAlarm(alarm);
        }
      }
    }, [])

  return (
    <Gradient>
        <View style={[commonStyles.container, ringPageStyles.myContainer]}>
        <Text style={ringPageStyles.wakeTime}>{correspondingAlarm?.time}</Text>
        <Text style={ringPageStyles.title}>{correspondingAlarm?.description}</Text>
        <Pressable onPress={async () => stopRinging()}>
            <Text style={ringPageStyles.wakeUp}>{pageText}</Text>
        </Pressable>
        </View>
    </Gradient>
  )
}