import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './components/calendar-screen-components/calendar-screen';
import AlarmsListScreen from './components/list-screen-components/list-screen';
import SettingsScreen from './components/settings-screen-components/settings-screen';
import StatisticsScreen from './components/statistics-screen-components/statistics-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'montserrat-alt-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
          'lato-medium': require('./assets/fonts/Lato-Medium.ttf'),
          'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
          'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
          'kyiv-type': require('./assets/fonts/KyivTypeSans.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
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
        <Tab.Screen name='Alarms' component={AlarmsListScreen} options={{
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
      <StatusBar style='light' backgroundColor="#F1B6CF" />
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
