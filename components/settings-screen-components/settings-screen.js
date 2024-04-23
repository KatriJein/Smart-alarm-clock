import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import SettingsList from './settings-list';
import { STATUSBAR_HEIGHT } from '../../const';
import { vw } from 'react-native-expo-viewport-units';
import Gradient from '../Gradient';
import SettingChoiceOption from '../alarm-settings-components/settings/setting-option';
import SwitchOption from '../alarm-settings-components/settings/switch-option';
import HorizontalLine from '../common-components/horizontal-line';
import EditingOption from './editing-option';
import { useSelector, useDispatch } from 'react-redux';
import { updateAreNotificationsEnabled, updateUserAvatarUri, updateUserName, updateUserPhone } from '../../store/settingsReducer';
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

const userImg = require('../../assets/user-img.png');

export default function SettingsScreen() {

  const name = useSelector(state => state.settings.userName);
  const avatarUri = useSelector(state => state.settings.userAvatarUri);
  const phone = useSelector(state => state.settings.phone);
  const email = useSelector(state => state.settings.email);
  const theme = useSelector(state => state.settings.themeName);
  const notificationsEnabled = useSelector(state => state.settings.notificationsEnabled);

  const [userName, setUserName] = useState(name);
  const [image, setImage] = useState(avatarUri);
  const [userPhone, setUserPhone] = useState(phone);
  const [userEmail, setUserEmail] = useState(email);
  const [userTheme, setUserTheme] = useState(theme);
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState(notificationsEnabled);

  const dispatch = useDispatch();

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Без данного разрешения не получится загрузить аватарку!');
    }
    else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        const imgName = `${new Date()}`;
        const imgPath = `${FileSystem.documentDirectory}${imgName}`;
        await FileSystem.copyAsync({
          from: result.assets[0].uri,
          to: imgPath,
        });
        setImage(imgPath);
        dispatch(updateUserAvatarUri(imgPath));
      }
    }
  }

  const updateNotifications = (isEnabled) => {
    setAreNotificationsEnabled(isEnabled);
    dispatch(updateAreNotificationsEnabled(isEnabled));
  }

  const updateName = (name) => {
    setUserName(name);
    dispatch(updateUserName(name));
  }

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.title]}>Настройки</Text>
        </View>
        <Pressable style={styles.user} onPress={() => selectImage()}>
          <Image style={styles.imageStyle} source={image === "" ? userImg : {uri: image}}></Image>
          <TextInput onChangeText={(text) => updateName(text)} defaultValue={userName} style={[styles.text, styles.desc]}></TextInput>
        </Pressable>
        <View>
          <View style={styles.listsContainer}>
            <View style={styles.containerList}>
              <View style={styles.optionContainer}>
                <EditingOption optionTitle="Телефон" currentOption={userPhone}/>
              </View>
              <HorizontalLine />
              <View style={styles.optionContainer}>
              <EditingOption optionTitle="Почта" currentOption={userEmail}/>
              </View>
            </View>
            <View style={styles.containerList}>
              <View style={styles.optionContainer}>
                <SettingChoiceOption optionTitle="Тема" currentOption={userTheme}/>
              </View>
              <HorizontalLine />
              <View style={styles.optionContainer}>
                <SwitchOption isEnabled={areNotificationsEnabled} optionName="Уведомления (трекер)" onPress={(isEnabled) => updateNotifications(isEnabled)} />
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
  imageStyle: {
    width: 110,
    height: 110,
    borderRadius: 281
  },
  user: {
    width: '100%',
    marginTop: 27,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    marginTop: 85,
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
    width: '70%',
    textAlign: 'center',
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
