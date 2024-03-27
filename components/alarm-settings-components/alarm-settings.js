
import { View, Text, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { alarmSettingsStyles } from './styles/alarm-settings-styles'
import SettingChoiceOption from './settings/setting-option'
import HorizontalLine from '../common-components/horizontal-line'
import Slider from '@react-native-community/slider'
import sliderThumb from "../../assets/sliderThumb.png"
import SwitchOption from './settings/switch-option'
import InputOption from './settings/input-option'

export default function AlarmSettings() {

  const soundOptions = useRef(["Дождь", "Пение птиц", "Гроза"]);
  const dayOptions = useRef(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]);
  const intervalOptions = useRef(["5 мин", "10 мин", "15 мин"]);
  const puzzleOptions = useRef(["Нет", "Математический пример", "Другое"]);

  const [soundOption, setSoundOption] = useState(soundOptions.current[0]);
  const [dayOption, setDayOption] = useState(dayOptions.current[0]);
  const [intervalOption, setIntervalOption] = useState(intervalOptions.current[0]);
  const [puzzleOption, setPuzzleOption] = useState(puzzleOptions.current[0]);
  const [description, setDescription] = useState("");

  const soundValue = useRef(50);
  const useVibration = useRef(false);
  const neighbourWakeUp = useRef(false);

  const updateSoundValue = (value) => {
    soundValue.current = value;
  }

  const updateVibrationChoice = (isEnabled) => {
    useVibration.current = isEnabled;
  }

  const updateNeighbourWakeUpChoice = (isEnabled) => {
    neighbourWakeUp.current = isEnabled;
  }

  return (
    <ScrollView contentContainerStyle={alarmSettingsStyles.scrollContainer} style={alarmSettingsStyles.container}>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Звук" currentOption={soundOption}/>
        <Slider
        style={{ width: 320, transform: [{ scaleY: 2, }], marginTop: 10 }}
        minimumTrackTintColor='rgba(217, 51, 113, 1)'
        maximumTrackTintColor='rgba(217, 51, 113, 1)'
        thumbImage={sliderThumb}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={soundValue.current}
        onValueChange={(value) => updateSoundValue(value)}></Slider>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <InputOption optionTitle="Подпись" placeholder="Будильник" description={description} setDescription={setDescription}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Вибрация" onPress={(isEnabled) => updateVibrationChoice(isEnabled)}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Повтор" currentOption={dayOption}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Интервал" currentOption={intervalOption}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Головоломка" currentOption={puzzleOption}/>
      </View>
      <HorizontalLine/>
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Не будить соседа" onPress={(isEnabled) => updateNeighbourWakeUpChoice(isEnabled)}/>
      </View>
    </ScrollView>
  )
}