import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { commonStyles } from '../../common-styles';
import AlarmsBar from './alarms-bar';
import AlarmBlock from './alarm-block';
import { styles as listScreenStyles } from './styles/list-screen-styles';
import { useSelector } from 'react-redux';
import Gradient from '../Gradient';



export default function AlarmsListScreen({navigation}) {
  const alarmsList = useSelector(state => state.alarms.alarms);
  return (
    <Gradient>
      <View style={commonStyles.container}>
        <AlarmsBar />
        <Text style={listScreenStyles.pageTitle}>Будильники</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={listScreenStyles.scrollView}>
          {Object.values(alarmsList).map(item => (<AlarmBlock key={item.id} alarm={item} description={"На "} alarmTime={"6:30"} alarmDays={"Ср, Чт"}/>))}
        </ScrollView>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})
