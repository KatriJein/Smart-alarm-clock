import { StyleSheet, Text, View, FlatList } from 'react-native';
import { commonStyles } from '../../common-styles';
import AlarmsBar from './alarms-bar';
import AlarmBlock from './alarm-block';
import { styles as listScreenStyles } from './styles/list-screen-styles';
import { useSelector } from 'react-redux';
import Gradient from '../Gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef, useState } from 'react';

export default function AlarmsListScreen() {
  const alarmsList = useSelector(state => state.alarms.alarms);

  const renderItem = ({ item }) => (
    <GestureHandlerRootView style={styles.background}>
      <AlarmBlock key={item.id} alarm={item} simultaneousHandlers={scrollRef}/>
    </GestureHandlerRootView>
  );

  const scrollRef = useRef(null);
  return (
    <Gradient>
        <View style={commonStyles.container}>
          <AlarmsBar />
          <Text style={listScreenStyles.pageTitle}>Будильники</Text>
          <FlatList
            data={Object.values(alarmsList)}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            style={listScreenStyles.scrollView}
          />
        </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})
