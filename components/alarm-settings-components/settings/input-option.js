
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ButtonBack from '../../button-back';
import { Ionicons } from '@expo/vector-icons';
import { settingOptionStyles } from '../styles/setting-option-styles';
import Gradient from '../../Gradient';
import { vw } from 'react-native-expo-viewport-units';

export default function InputOption({ optionTitle, value, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={settingOptionStyles.container}>
      <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
      <TouchableOpacity style={settingOptionStyles.choiceView} onPress={() => setModalVisible(true)}>
        <Text style={settingOptionStyles.optionChoice}>{value}</Text>
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
            <View style={styles.container}>
              <Text style={[styles.text, styles.title]}>{optionTitle}:</Text>
              <TextInput
                placeholder='Описание будильника'
                style={[styles.text, styles.input]}
                value={value}
                onChangeText={onChange}>
              </TextInput>
            </View>
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
    flexDirection: 'row',
    columnGap: 10
  },
  textInputModal: {
    width: vw(15),
    borderColor: 'pink',
    borderWidth: 2,
    fontFamily: 'montserrat-alt-medium',
    fontSize: 22,
    padding: 8,
    textAlign: 'center',
    borderRadius: 10
  },
  container: {
    width: '90%',
    height: 'auto',
    flexDirection: 'column',
    columnGap: 30,
    rowGap: 15,
    padding: 10,
  },
  text: {
    fontFamily: 'kyiv-type',
    color: '#000'
  },
  title: {
    fontSize: Math.round(vw(6.5)),
    top: 2
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    fontSize: Math.round(vw(5.5)),
    paddingHorizontal: 9,
    paddingVertical: 3,
    textAlign: 'center',
    borderRadius: 13
  }
});