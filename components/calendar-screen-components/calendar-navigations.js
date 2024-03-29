import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './calendar-screen';
import DayDetails from './day-details-components/day-details';

const Stack = createNativeStackNavigator();

export default function CalendarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Day details" component={DayDetails} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}