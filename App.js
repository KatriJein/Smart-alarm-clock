import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './components/calendar-screen-components/calendar-screen';
import AlarmsListScreen from './components/list-screen-components/list-screen';
import SettingsScreen from './components/settings-screen-components/settings-screen';
import StatisticsScreen from './components/statistics-screen-components/statistics-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBarStyle } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmPage from './components/alarm-settings-components/alarm-page';

const Tab = createBottomTabNavigator();
const AlarmsNavigationStack = createNativeStackNavigator();

const AlarmsStack = () => {
  return(
  <AlarmsNavigationStack.Navigator>
    <AlarmsNavigationStack.Screen name='AlarmList' component={AlarmsListScreen} options={{headerShown: false}}/>
    <AlarmsNavigationStack.Screen name='AlarmSettings' component={AlarmPage} options={{headerShown: false}}/>
  </AlarmsNavigationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#F1B6CF',
          height: 60,
          borderTopWidth: 0,
          alignItems: 'center'
        }
      }}>
        <Tab.Screen name='Alarms' component={AlarmsStack} options={{
          tabBarIcon: ({ color }) => <Ionicons name="alarm-outline" size={45} color={color} />,
          headerShown: false
        }} />
        <Tab.Screen name='Calendar' component={CalendarScreen} options={{
          tabBarIcon: ({ color }) => <Ionicons name="calendar-clear-outline" size={41} color={color} />,
          headerShown: false
        }} />
        <Tab.Screen name='Statistics' component={StatisticsScreen} options={{
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart-outline" size={39} color={color} />,
          headerShown: false
        }} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={40} color={color} />,
          headerShown: false
        }} />
      </Tab.Navigator>
      <StatusBar style='light' backgroundColor="#F1B6CF"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
