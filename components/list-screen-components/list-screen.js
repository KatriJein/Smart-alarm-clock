import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';
import AlarmsBar from './alarms-bar';
import AlarmBlock from './alarm-block';
import { styles as listScreenStyles } from './styles/list-screen-styles';
import { useSelector } from 'react-redux';
import Gradient from '../Gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function AlarmsListScreen() {
  const alarmsList = useSelector(state => state.alarms.alarms);
  const scrollRef = useRef(null);
  return (
    <Gradient>
      <GestureHandlerRootView style={styles.background}>
        <View style={commonStyles.container}>
          <AlarmsBar />
          <Text style={listScreenStyles.pageTitle}>Будильники</Text>
          <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} style={listScreenStyles.scrollView}>
            {Object.values(alarmsList).map(item => (<AlarmBlock key={item.id} alarm={item} simultaneousHandlers={scrollRef}/>))}
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})
