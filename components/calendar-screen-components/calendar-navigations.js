import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './calendar-screen';
import DayDetails from './day-details-components/day-details';

const Stack = createNativeStackNavigator();

export default function CalendarStack({ route }) {
  const { date, change } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" initialParams={{date, change}} component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Day details" component={DayDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}