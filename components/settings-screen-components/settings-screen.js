import { StyleSheet, Text, View, Image } from 'react-native';
import SettingsList from './settings-list';
import { STATUSBAR_HEIGHT } from '../../const';
import { vw } from 'react-native-expo-viewport-units';
import Gradient from '../Gradient';

const userImg = require('../../assets/user-img.png');

export default function SettingsScreen() {
  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.title]}>Настройки</Text>
        </View>
        <View style={styles.user}>
          <Image source={userImg}></Image>
          <Text style={[styles.text, styles.desc]}>Имя</Text>
        </View>
        <SettingsList />
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUSBAR_HEIGHT,
  },
  user: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'montserrat-alt-medium',
    color: '#000'
  },
  title: {
    fontSize: 38
  },
  desc: {
    fontSize: Math.round(vw(6.5)),
    marginTop: '1%'
  }
});
