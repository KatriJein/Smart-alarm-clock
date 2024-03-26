
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../common-styles'
import { useRoute } from '@react-navigation/native'
import AlarmBar from './alarm-bar'
import AlarmTitle from './alarm-title'

export default function AlarmPage() {

  const [alarmName, setAlarmName] = useState("Название");


  return (
    <View style={[commonStyles.container, additionalStyles.container]}>
      <AlarmBar/>
      <AlarmTitle title={alarmName} setTitle={setAlarmName}/>
    </View>
  )
}

const additionalStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center"
  }
})