import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';

export default function StatisticsScreen() {
  return (
    <View style={commonStyles.container}>
        <Text>Экран для статистики</Text>
    </View>
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
