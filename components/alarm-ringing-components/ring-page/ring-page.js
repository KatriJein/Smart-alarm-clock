
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { commonStyles } from '../../../common-styles';
import Gradient from '../../Gradient';
import * as Notifications from "expo-notifications";
import { stopAlarm } from '../../common-functions/CommonFunctions';
import { ringPageStyles } from './ring-page-styles';
import zzz from '../../../assets/svg/zzz2.png';
import stop from '../../../assets/svg/stop2.png';

export default function RingPage({ navigation }) {

  // const [pageText, setPageText] = useState("Отключить >>");
  const stopRinging = async () => {
    // setPageText("Останавливаю...");
    await stopAlarm();
  }

  return (
    <View style={ringPageStyles.container}>
      <View style={ringPageStyles.mainContainer}>
        <View style={ringPageStyles.alarm}>
          <View style={ringPageStyles.ellipse}>
            <View style={ringPageStyles.timeContainer}>
              <Text style={[ringPageStyles.text, ringPageStyles.time]}>12:05</Text>
              <Text style={[ringPageStyles.text, ringPageStyles.name]}>Название</Text>
            </View>
          </View>
          <View style={ringPageStyles.desc}>
            <Text style={[ringPageStyles.text, ringPageStyles.description]}>Описание будильника</Text>
          </View>
        </View>
        <View style={ringPageStyles.buttons}>
          <TouchableOpacity activeOpacity={0.7}>
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