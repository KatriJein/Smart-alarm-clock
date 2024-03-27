
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { alarmSettingsStyles } from './styles/alarm-settings-styles'
import SettingChoiceOption from './settings/setting-option'
import HorizontalLine from './settings/horizontal-line'

export default function AlarmSettings() {

  const soundOptions = ["Дождь", "Пение птиц", "Гроза"]
  const dayOptions = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  const intervalOptions = ["5 мин", "10 мин", "15 мин"]
  const puzzleOptions = ["Нет", "Математический пример", "Другое"]

  return (
    <ScrollView contentContainerStyle={alarmSettingsStyles.scrollContainer} style={alarmSettingsStyles.container}>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Звук" availableOptions={soundOptions}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Повтор" availableOptions={dayOptions}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Интервал" availableOptions={intervalOptions}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Головоломка" availableOptions={puzzleOptions}/>
      </View>
    </ScrollView>
  )
}