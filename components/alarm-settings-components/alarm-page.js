
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../common-styles'
import { useRoute } from '@react-navigation/native'
import AlarmBar from './alarm-bar'
import AlarmTitle from './alarm-title'
import TimeSelect from './time-select'
import AlarmSettings from './alarm-settings'

export default function AlarmPage() {

  const route = useRoute();
  const { alarmTime } = route.params;
  const [alarmName, setAlarmName] = useState("Название");
  const [time, setTime] = useState(alarmTime);

  return (
    <View style={[commonStyles.container, additionalStyles.container]}>
      <AlarmBar/>
      <AlarmTitle title={alarmName} setTitle={setAlarmName}/>
      <TimeSelect timeString={time} setTime={setTime}/>
      <ScrollView contentContainerStyle={{alignItems: "center"}} style={additionalStyles.scrollStyle}>
        <AlarmSettings/>
      </ScrollView>
    </View>
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