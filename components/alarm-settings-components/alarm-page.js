
import { View, Text, StyleSheet, ScrollView, BackHandler } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import { commonStyles } from '../../common-styles';
import AlarmTitle from './alarm-title';
import TimeSelect from './time-select';
import AlarmSettings from './alarm-settings';
import ButtonBack from '../button-back';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addAlarm, updateNotificationId } from '../../store/alarmReducer';
import { addWakeUpTime, addFallAsleepTime } from '../../store/statisticsReducer';
import Gradient from '../Gradient';
import dayjs from 'dayjs';
import { createId } from '../../const';
import * as Notifications from "expo-notifications"
import { CalculateSecondsToRing } from '../common-functions/CommonFunctions';
import { updateSound } from '../AlarmSound';
import { scheduleAlarm } from '../common-functions/CommonFunctions';
import { CORRELATE_SOUND_NAMES } from '../../const';

export default function AlarmPage({ route }) {
  const defaultState = {
    id: createId(),
    name: 'Будильник',
    time: dayjs().format('HH:mm'),
    sound: 'Дождь',
    volume: 50,
    interval: 5,
    puzzle: 'Нет',
    isEnabled: false,
    description: 'Вставай на 1 пару',
    useVibration: true,
    neighbourOption: true,
    password: "password",
    puzzleAmount: 0,
    smartAlarm: false,
    timeToSleep: dayjs().format('HH:mm'),
    timeToWakeUp: dayjs().format('HH:mm'),
    days: [],
    notificationId: ""
  };

  const { alarm } = route.params;
  const [currentAlarm, setcurrentAlarm] = useState(alarm || defaultState);
  const navigation = useNavigation();
  const dispatch = useDispatch();


  useEffect(() => {
    const backAction = async () => {
      await onPressBackButton();
      return true; // Returning true prevents default back button behavior (i.e., exiting the app)
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
  
    return () => backHandler.remove(); // Remove the event listener on component unmount
  
  }, [currentAlarm]);

  function changeOption(option, value) {
    setcurrentAlarm(prev => ({
      ...prev,
      [option]: value
    }));
  };

  async function onPressBackButton() {
    if (currentAlarm.days.length === 0) {
      let nextDay = (new Date().getDay() + 1) % 7;
      currentAlarm.days = [nextDay];
    }
    dispatch(addAlarm(currentAlarm));
    if (!currentAlarm.notificationId !== "") {
      Notifications.cancelScheduledNotificationAsync(currentAlarm.notificationId);
    }
    if (currentAlarm.isEnabled) {
      let seconds = CalculateSecondsToRing(currentAlarm.time, currentAlarm.days);
      const res = await scheduleAlarm(currentAlarm.name, currentAlarm.description, seconds, CORRELATE_SOUND_NAMES[currentAlarm.sound], currentAlarm.useVibration, currentAlarm.volume);
      dispatch(updateNotificationId({alarmId: currentAlarm.id, notificationId: res}));
    }
    if (currentAlarm.smartAlarm) {
      dispatch(addWakeUpTime(currentAlarm.timeToWakeUp));
      dispatch(addFallAsleepTime(currentAlarm.timeToSleep));
    }
    navigation.navigate('AlarmsList');
  }



  // const route = useRoute();
  // const { alarmTime } = route.params;
  // const [alarmName, setAlarmName] = useState("Название");
  // const [time, setTime] = useState('15:30');
  // const [soundOption, setSoundOption] = useState("");
  // const [volume, setVolume] = useState(50);
  // const [intervalOption, setIntervalOption] = useState("");
  // const [daysOption, setDaysOption] = useState("");
  // const [puzzleOption, setPuzzleOption] = useState("");
  // const [alarmDescription, setAlarmDescription] = useState("");
  // const [useVibration, setUseVibration] = useState(false);
  // const [useNeighbourNotWakeUpOption, setUseNeighbourNotWakeUpOption] = useState(false);

  // const SettingsContext = optionsContext;

  return (
    <Gradient>
      <View style={[commonStyles.container, additionalStyles.container]}>
        <ButtonBack onBackPress={async () => onPressBackButton()} />
        <AlarmTitle title={currentAlarm.name} changeOption={(value) => changeOption('name', value)} />
        <TimeSelect timeString={currentAlarm.time} onChange={(value) => changeOption('time', value)} />
        <ScrollView contentContainerStyle={{ alignItems: "center" }} style={additionalStyles.scrollStyle}>
          <AlarmSettings currentAlarm={currentAlarm} changeOption={changeOption} />
        </ScrollView>
      </View>
    </Gradient>
  )
}

const additionalStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 35
  },
  scrollStyle: {
    width: "100%",
    display: "flex",
    marginBottom: 15
  }
})