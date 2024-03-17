import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';

export default function SettingsScreen() {
  return (
    <View style={commonStyles.container}>
        <Text>Экран для настроек</Text>
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
