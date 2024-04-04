
import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { commonStyles } from '../../../common-styles'
import Gradient from '../../Gradient'
import * as Notifications from "expo-notifications"

export default function RingPage({navigation}) {

    const stopRinging = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Будильник остановлен!",
                data: {
                    action: "stop"
                }
            },
            trigger: null
        })
    }

  return (
    <Gradient>
        <View style={commonStyles.container}>
        <Pressable onPress={async () => stopRinging()}>
            <Text>RingPage</Text>
        </Pressable>
        </View>
    </Gradient>
  )
}