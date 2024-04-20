import { StyleSheet, Text, View, Image } from 'react-native';
import SettingsList from './settings-list';
import { STATUSBAR_HEIGHT } from '../../const';
import { vw } from 'react-native-expo-viewport-units';
import Gradient from '../Gradient';
import SettingChoiceOption from '../alarm-settings-components/settings/setting-option';
import SwitchOption from '../alarm-settings-components/settings/switch-option';
import HorizontalLine from '../common-components/horizontal-line';
import EditingOption from './editing-option';

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
        <View>
          <View style={styles.listsContainer}>
            <View style={styles.containerList}>
              <View style={styles.optionContainer}>
                <EditingOption optionTitle="Телефон" currentOption='+7 (934) 254-01-04'/>
              </View>
              <HorizontalLine />
              <View style={styles.optionContainer}>
              <EditingOption optionTitle="Почта" currentOption='pochta@mail.ru'/>
              </View>
            </View>
            <View style={styles.containerList}>
              <View style={styles.optionContainer}>
                <SettingChoiceOption optionTitle="Тема" currentOption='Кварц'/>
              </View>
              <HorizontalLine />
              <View style={styles.optionContainer}>
                <SwitchOption optionName="Уведомления" onPress={() => { }} />
              </View>
            </View>
          </View>
        </View>
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
  },
  containerList: {
    marginTop: 30,
    width: "95%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  optionContainer: {
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
  },
  listsContainer: {
    alignItems: 'center'
  }
});
