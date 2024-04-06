import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RingPage from "../ring-page/ring-page";
import CardsPuzzle from "../puzzle-cards/cards-puzzle";

const RingNavigationStack = createNativeStackNavigator();

export const RingStack = () => {
    return(
      <RingNavigationStack.Navigator>
        <RingNavigationStack.Screen name='RingPage' component={RingPage} options={{headerShown: false}}/>
        <RingNavigationStack.Screen name='CardsPuzzle' component={CardsPuzzle} options={{headerShown: false}}/>
      </RingNavigationStack.Navigator>
      )
  }