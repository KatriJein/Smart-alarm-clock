
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { createContext, useState } from 'react';
import { commonStyles } from '../../common-styles';
import AlarmTitle from './alarm-title';
import TimeSelect from './time-select';
import AlarmSettings from './alarm-settings';
import ButtonBack from '../button-back';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addAlarm } from '../../store/alarmReducer';
import { addWakeUpTime, addFallAsleepTime } from '../../store/statisticsReducer';
import Gradient from '../Gradient';
import dayjs from 'dayjs';
import { createId } from '../../const';

export default function AlarmPage({ route }) {
  const defaultState = {
    id: createId(),
    name: 'Будильник',
    time: dayjs().format('HH:mm'),
    sound: '',
    volume: 50,
    interval: 5,
    puzzle: 'Пароль',
    description: 'Вставай на 1 пару',
    useVibration: true,
    neighbourOption: true,
    smartAlarm: false,
    timeToSleep: dayjs().format('HH:mm'),
    timeToWakeUp: dayjs().format('HH:mm'),
    days: [],
    notificationId: 5
  };

  const { alarm } = route.params;
  const [currentAlarm, setcurrentAlarm] = useState(alarm || defaultState);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log(currentAlarm);

  function changeOption(option, value) {
    setcurrentAlarm(prev => ({
      ...prev,
      [option]: value
    }));
  };

  function onPressBackButton() {
    dispatch(addAlarm(currentAlarm));
    //Потом перенести
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
        <ButtonBack onBackPress={() => onPressBackButton()} />
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