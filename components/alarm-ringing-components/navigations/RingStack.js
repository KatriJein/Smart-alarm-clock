import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RingPage from "../ring-page/ring-page";
import CardsPuzzle from "../puzzle-cards/cards-puzzle";
import WordsPuzzle from "../puzzle-words/words-puzzle";
import MathPuzzle from "../puzzle-math/math-puzzle";

const RingNavigationStack = createNativeStackNavigator();

export const RingStack = () => {
    return(
      <RingNavigationStack.Navigator>
        <RingNavigationStack.Screen name='RingPage' component={RingPage} options={{headerShown: false}}/>
        <RingNavigationStack.Screen name='CardsPuzzle' component={CardsPuzzle} options={{headerShown: false}}/>
        <RingNavigationStack.Screen name="WordsPuzzle" component={WordsPuzzle} options={{headerShown: false}}/>
        <RingNavigationStack.Screen name="MathPuzzle" component={MathPuzzle} options={{headerShown: false}}/>
      </RingNavigationStack.Navigator>
      )
  }