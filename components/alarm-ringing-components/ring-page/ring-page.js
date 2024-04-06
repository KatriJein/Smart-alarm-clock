
import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import * as Notifications from "expo-notifications"
import { stopAlarm } from '../../common-functions/CommonFunctions'
import { ringPageStyles } from './ring-page-styles'

export default function RingPage({navigation}) {

    const [pageText, setPageText] = useState("Отключить >>")
    const stopRinging = async () => {
        setPageText("Останавливаю...");
        await stopAlarm();
    }

  return (
    <Gradient>
        <View style={[commonStyles.container, ringPageStyles.myContainer]}>
        <Text style={ringPageStyles.wakeTime}>12:05</Text>
        <Text style={ringPageStyles.title}>Тебе пора на первую пару!</Text>
        <Pressable onPress={async () => stopRinging()}>
            <Text style={ringPageStyles.wakeUp}>{pageText}</Text>
        </Pressable>
        </View>
    </Gradient>
  )
}