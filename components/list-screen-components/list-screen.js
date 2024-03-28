import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { commonStyles } from '../../common-styles';
import { Platform } from 'react-native';
import { PlatformConstants } from 'react-native';
import AlarmsBar from './alarms-bar';
import AlarmBlock from './alarm-block';
import { styles as listScreenStyles } from './styles/list-screen-styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmPage from '../alarm-settings-components/alarm-page';
import { LinearGradient } from "expo-linear-gradient"

export default function AlarmsListScreen({navigation}) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <View style={commonStyles.container}>
        <AlarmsBar/>
        <Text style={listScreenStyles.pageTitle}>Будильники</Text>
        <ScrollView style={listScreenStyles.scrollView}>
            <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
            <AlarmBlock description={"Что"} alarmTime={"08:08"} alarmDays={"Ср, Чт"}/>
            <AlarmBlock description={"Где"} alarmTime={"14:30"} alarmDays={"Всегда"}/>
            <AlarmBlock description={"Когда"} alarmTime={"18:30"} alarmDays={"Вчера"}/>
            <AlarmBlock description={"Ночь"} alarmTime={"06:30"} alarmDays={"..."}/>
            <AlarmBlock description={"Утро"} alarmTime={"23:30"} alarmDays={"Ср, Чт"}/>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}


