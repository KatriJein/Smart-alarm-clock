
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { createContext, useState } from 'react';
import { commonStyles } from '../../common-styles';
import AlarmTitle from './alarm-title';
import TimeSelect from './time-select';
import AlarmSettings from './alarm-settings';
import ButtonBack from '../button-back';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addAlarm, updateNotificationId } from '../../store/alarmReducer';
import Gradient from '../Gradient';
import dayjs from 'dayjs';
import { createId } from '../../const';
import * as Notifications from "expo-notifications"
import { CalculateSecondsToRing } from '../common-functions/CommonFunctions';
import { updateSound } from '../AlarmSound';
import { scheduleAlarm } from '../common-functions/CommonFunctions';

export default function AlarmPage({ route }) {
  const defaultState = {
    id: createId(),
    name: 'Будильник',
    time: dayjs().format('HH:mm'),
    sound: '',
    volume: 50,
    interval: 5,
    puzzle: 'Пароль',
    isEnabled: false,
    description: 'Вставай на 1 пару',
    useVibration: true,
    neighbourOption: true,
    password: "password",
    days: [],
    notificationId: ""
  };
  
  const { alarm } = route.params;
  const [currentAlarm, setcurrentAlarm] = useState(alarm || defaultState);
  const navigation = useNavigation();
  const dispatch = useDispatch()

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
      const res = await scheduleAlarm(currentAlarm.name, currentAlarm.description, seconds, "birds.mp3", alarm.useVibration, [3000, 4000, 3000, 4000]);
      dispatch(updateNotificationId({alarmId: currentAlarm.id, notificationId: res}));
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
        <TimeSelect timeString={currentAlarm.time} onChange={(value) => changeOption('time', value)}/>
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