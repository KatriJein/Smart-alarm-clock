import { StyleSheet, Text, View } from 'react-native';
import Calendar from './calendar';
import { Ionicons } from '@expo/vector-icons';
import { STATUSBAR_HEIGHT } from '../../const';
import Gradient from '../Gradient';

export default function CalendarScreen({route}) {
 
  const { date, change } = route.params;

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={stylesHeader.header}>
          <Text style={stylesHeader.title}>Трекер</Text>
          <View style={stylesHeader.sleep}>
            <Ionicons name="chevron-back-outline" size={30} color="black" />
            <Text style={stylesHeader.sleepText}>8 часов</Text>
            <Ionicons name="chevron-forward-outline" size={30} color="black" />
          </View>
        </View>
        <View style={styles.calendar}>
          <Calendar date={date} change={change} />
        </View>
      </View>
    </Gradient>

  );
}

const stylesHeader = StyleSheet.create({
  header: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'montserrat-alt-medium',
    fontSize: 38,
    justifyContent: 'center',
    marginTop: '12%'
  },
  sleep: {
    flexDirection: 'row',
    width: 'auto',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '6%'
  },
  sleepText: {
    fontFamily: 'lato-medium',
    fontSize: 24,
    color: '#000',
    marginHorizontal: 3
  }
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: STATUSBAR_HEIGHT
  },
  calendar: {
    width: '100%',
    height: '70%',
  }
});