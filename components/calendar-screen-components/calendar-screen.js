import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendar from './calendar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { STATUSBAR_HEIGHT } from '../../const';

export default function CalendarScreen({ navigation }) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
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
          <Calendar navigation />
        </View>
      </View>
    </LinearGradient>

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