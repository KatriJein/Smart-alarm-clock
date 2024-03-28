
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { createContext, useState } from 'react'
import { commonStyles } from '../../common-styles'
import { useRoute } from '@react-navigation/native'
import AlarmBar from './alarm-bar'
import AlarmTitle from './alarm-title'
import TimeSelect from './time-select'
import AlarmSettings from './alarm-settings'
import {LinearGradient} from "expo-linear-gradient"
import { optionsContext } from './contexts/OptionsContext'

export default function AlarmPage() {

  const route = useRoute();
  const { alarmTime } = route.params;
  const [alarmName, setAlarmName] = useState("Название");
  const [time, setTime] = useState(alarmTime);
  const [soundOption, setSoundOption] = useState("");
  const [volume, setVolume] = useState(50);
  const [intervalOption, setIntervalOption] = useState("");
  const [daysOption, setDaysOption] = useState("");
  const [puzzleOption, setPuzzleOption] = useState("");
  const [alarmDescription, setAlarmDescription] = useState("");
  const [useVibration, setUseVibration] = useState(false);
  const [useNeighbourNotWakeUpOption, setUseNeighbourNotWakeUpOption] = useState(false);

  const SettingsContext = optionsContext;

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <View style={[commonStyles.container, additionalStyles.container]}>
        <AlarmBar/>
        <AlarmTitle title={alarmName} setTitle={setAlarmName}/>
        <TimeSelect timeString={time} setTime={setTime}/>
        <ScrollView contentContainerStyle={{alignItems: "center"}} style={additionalStyles.scrollStyle}>
          <SettingsContext.Provider value={{sound: soundOption, interval: intervalOption, day: daysOption, puzzle: puzzleOption,
          alarmDescription: alarmDescription, useVibration: useVibration, neighbourOption: useNeighbourNotWakeUpOption, volume: volume,
          setSound: setSoundOption, setInterval: setIntervalOption, setDays: setDaysOption, setPuzzle: setPuzzleOption, setVolume: setVolume,
          setAlarmDescription: setAlarmDescription, setVibration: setUseVibration, setNeighbourOption: setUseNeighbourNotWakeUpOption}}>
            <AlarmSettings/>
          </SettingsContext.Provider>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

const additionalStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scrollStyle: {
    width: "100%",
    display: "flex",
    marginBottom: 15
  }
})