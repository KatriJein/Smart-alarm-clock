import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmsListScreen from './list-screen';
import AlarmPage from '../alarm-settings-components/alarm-page';

const Stack = createNativeStackNavigator();

export default function AlarmsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AlarmsList"  component={AlarmsListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Alarm details" component={AlarmPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}