import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlarmsListScreen from './components/list-screen-components/list-screen';
import SettingsScreen from './components/settings-screen-components/settings-screen';
import StatisticsScreen from './components/statistics-screen-components/statistics-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBarStyle } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmPage from './components/alarm-settings-components/alarm-page';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import CalendarStack from './components/calendar-screen-components/calendar-navigations';
import { store } from './store/store.js'
import { Provider } from 'react-redux'


SplashScreen.preventAutoHideAsync();
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

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'montserrat-alt-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
          'lato-medium': require('./assets/fonts/Lato-Medium.ttf'),
          'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
          'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
          'kyiv-type': require('./assets/fonts/KyivTypeSans-Regular.ttf'),
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
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FB7DAC',
            tabBarInactiveTintColor: '#711B3B',
            tabBarStyle: {
              backgroundColor: '#ffceec',
              height: 60,
              borderTopWidth: 0,
              alignItems: 'center'
            }
          }}>
            <Tab.Screen name='Alarms' component={AlarmsListScreen} options={{
              tabBarIcon: ({ color }) => <Ionicons name="alarm-outline" size={45} color={color} />,
              headerShown: false
            }} />
            <Tab.Screen name='Calendar' component={CalendarStack} initialParams={{ date: '2024-03-24', change: false }} options={{
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
          <StatusBar style='light' backgroundColor="transparent" />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    width: '100%',
    height: '100%',
  }
});
