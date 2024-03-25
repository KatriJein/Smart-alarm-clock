import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { commonStyles } from '../../common-styles';
import { Platform } from 'react-native';
import { PlatformConstants } from 'react-native';
import AlarmsBar from './alarms-bar';
import AlarmBlock from './alarm-block';

export default function AlarmsListScreen() {
  return (
    <View style={commonStyles.container}>
      <AlarmsBar/>
      <Text style={styles.pageTitle}>Будильники</Text>
      <ScrollView style={styles.scrollView}>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
          <AlarmBlock description={"На первую пару"} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 15,
    width: "90%",
    marginBottom: 15
  },
  pageTitle: {
    marginTop: 15,
    fontSize: 38
  }
})


