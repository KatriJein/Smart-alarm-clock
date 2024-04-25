import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import * as Notifications from "expo-notifications"
import { buildDate, buildNewAlarmTime, remindOfTracker, scheduleAlarm, stopAlarm } from '../../common-functions/CommonFunctions'
import { ringPageStyles } from './ring-page-styles'
import { useDispatch, useSelector } from "react-redux"
import { getNotificationId } from '../../CurrentNotification'
import { CORRELATE_PAGES } from '../../../const'
import { addAlarm } from '../../../store/alarmReducer'
import { interruptSound } from '../../AlarmSound';
import stop from '../../../assets/svg/stop2.png';
import zzz from '../../../assets/svg/zzz2.png';
import { addDelayedAlarm, addOption } from '../../../store/calendarReducer'

export default function RingPage({navigation, route}) {
    const params = route.params;
    const alarmsList = useSelector(state => state.alarms.alarms);
    const stats = useSelector(state => state.calendar.dailyStats);
    const areNotificationsEnabled = useSelector(state => state.settings.notificationsEnabled);
    const dispatch = useDispatch();
    const [correspondingAlarm, setCorrespondingAlarm] = useState(null);
    const [pageText, setPageText] = useState("Отключить >>");
    const [puzzlePage, setPuzzlePage] = useState("");
    const [beenToPuzzle, setBeenToPuzzle] = useState(false);
    const stopRinging = async () => {
        if (puzzlePage === "" || params) {
          setPageText("Останавливаю...");
          let date = buildDate();
          if (correspondingAlarm.smartAlarm) {
            dispatch(addOption({date: buildDate(), option: 'timeToSleep', value: correspondingAlarm.timeToSleep}));
            dispatch(addOption({date: buildDate(), option: 'timeToWake', value: correspondingAlarm.time}));
          }
          await stopAlarm();
          if (stats[date] === undefined && areNotificationsEnabled) {
            await remindOfTracker(date);
          }
        }
        else {
          if (correspondingAlarm.neighbourOption && !beenToPuzzle) {
            await interruptSound();
          }
          navigation.navigate(puzzlePage, {password: correspondingAlarm.password, amount: correspondingAlarm.puzzleAmount});
          setBeenToPuzzle(true);
        }
    }

    const postponeAlarm = async () => {
      let newTime = buildNewAlarmTime(correspondingAlarm.time, Number(correspondingAlarm.interval));
      const newAlarm = {...correspondingAlarm, time: newTime};
      dispatch(addAlarm(newAlarm));
      dispatch(addDelayedAlarm({date: buildDate(), time: Number(correspondingAlarm.interval)}))
      await stopAlarm();
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
    <View style={ringPageStyles.container}>
      <View style={ringPageStyles.mainContainer}>
        <View style={ringPageStyles.alarm}>
          <View style={ringPageStyles.ellipse}>
            <View style={ringPageStyles.timeContainer}>
              <Text style={[ringPageStyles.text, ringPageStyles.time]}>{correspondingAlarm?.time}</Text>
              <Text style={[ringPageStyles.text, ringPageStyles.name]}>{correspondingAlarm?.name}</Text>
            </View>
          </View>
          <View style={ringPageStyles.desc}>
            <Text style={[ringPageStyles.text, ringPageStyles.description]}>{correspondingAlarm?.description}</Text>
          </View>
        </View>
        <View style={ringPageStyles.buttons}>
          <TouchableOpacity activeOpacity={0.7} onPress={async () => postponeAlarm()}>
            <Image source={zzz} style={ringPageStyles.button} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={async () => stopRinging()}>
            <Image source={stop} style={ringPageStyles.button} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}