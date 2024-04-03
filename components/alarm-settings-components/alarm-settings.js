
import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { alarmSettingsStyles } from './styles/alarm-settings-styles'
import SettingChoiceOption from './settings/setting-option'
import HorizontalLine from '../common-components/horizontal-line'
import Slider from '@react-native-community/slider'
import sliderThumb from "../../assets/sliderThumb.png"
import SwitchOption from './settings/switch-option'
import InputOption from './settings/input-option'
import { optionsContext } from './contexts/OptionsContext'

export default function AlarmSettings() {

  const soundOptions = useRef(["Дождь", "Пение птиц", "Гроза"]);
  const dayOptions = useRef(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]);
  const intervalOptions = useRef(["5 мин", "10 мин", "15 мин"]);
  const puzzleOptions = useRef(["Нет", "Математический пример", "Другое"]);
  
  const optionContext = useContext(optionsContext);

  const updateSoundValue = (value) => {
    optionContext.setVolume(value);
  }

  const updateVibrationChoice = (isEnabled) => {
    optionContext.setVibration(isEnabled);
  }

  const updateNeighbourWakeUpChoice = (isEnabled) => {
    optionContext.setNeighbourOption(isEnabled);
  }

  useEffect(() => {
    optionContext.setSound(soundOptions.current[0]);
    optionContext.setDays(dayOptions.current[0]);
    optionContext.setInterval(intervalOptions.current[0]);
    optionContext.setPuzzle(puzzleOptions.current[0]);
  }, [])

  return (
    <ScrollView contentContainerStyle={alarmSettingsStyles.scrollContainer} style={alarmSettingsStyles.container}>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Звук" currentOption={optionContext.sound}/>
        <Slider
        style={{ width: 320, transform: [{ scaleY: 2, }], marginTop: 10 }}
        minimumTrackTintColor='rgba(217, 51, 113, 1)'
        maximumTrackTintColor='rgba(217, 51, 113, 1)'
        thumbImage={sliderThumb}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={optionContext.volume}
        onValueChange={(value) => updateSoundValue(value)}></Slider>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <InputOption optionTitle="Подпись" placeholder="Будильник" description={optionContext.alarmDescription}
        setDescription={optionContext.setAlarmDescription}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Вибрация" onPress={(isEnabled) => updateVibrationChoice(isEnabled)}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Повтор" currentOption={optionContext.day}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Интервал" currentOption={optionContext.interval}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Головоломка" currentOption={optionContext.puzzle}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Не будить соседа" onPress={(isEnabled) => updateNeighbourWakeUpChoice(isEnabled)}/>
      </View>
    </ScrollView>
  )
}