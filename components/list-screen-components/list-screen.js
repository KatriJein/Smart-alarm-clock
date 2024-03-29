import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function AlarmsListScreen() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <View style={commonStyles.container}>
        <Text>Экран для будильников</Text>
      </View></LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})
