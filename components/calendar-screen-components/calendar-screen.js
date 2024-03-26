import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';

export default function CalendarScreen() {
  return (
    <View style={commonStyles.container}>
        <Text style={styles.title}>Трекер</Text>
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
  title: {
    fontFamily: 'montserrat-alt-medium',
    fontSize: 38,
    justifyContent: 'center'
  }
});