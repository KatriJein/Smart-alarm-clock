
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { settingOptionStyles } from '../styles/setting-option-styles';
import { Ionicons } from '@expo/vector-icons';
import Gradient from '../../Gradient';
import ButtonBack from '../../button-back';

export default function SettingChoiceOption({ children, optionTitle, currentOption }) {

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
            {children}
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