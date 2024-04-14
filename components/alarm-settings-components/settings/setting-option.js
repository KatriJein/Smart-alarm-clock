
import { View, Text, Image, Pressable, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { settingOptionStyles } from '../styles/setting-option-styles';
import nextArrow from "../../../assets/nextArrow.png";
import { Ionicons } from '@expo/vector-icons';
import { CORRELATE_SOUND_NAMES } from '../../../const';
import Gradient from '../../Gradient';
import ButtonBack from '../../button-back';
import SongsList from './songs-list/songs-list';

export default function SettingChoiceOption({optionTitle, currentOption, onChange}) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={settingOptionStyles.container}>
      <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
      <TouchableOpacity style={settingOptionStyles.choiceView} onPress={() => setModalVisible(true)}>
        <Text style={settingOptionStyles.optionChoice}>{currentOption}</Text>
        <Ionicons style={settingOptionStyles.arrow} name="chevron-forward-outline" size={25} color="black" />
      </TouchableOpacity>
      <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
            >
                <Gradient>
                    <View style={styles.modal}>
                        <ButtonBack onBackPress={() => setModalVisible(false)} />
                        <SongsList onChange={onChange} currentOption={currentOption}/>
                    </View>
                </Gradient>
            </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})