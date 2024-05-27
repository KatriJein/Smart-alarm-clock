
import { View, ScrollView } from 'react-native'
import React from 'react'
import { alarmSettingsStyles } from './styles/alarm-settings-styles'
import SettingChoiceOption from './settings/setting-option'
import HorizontalLine from '../common-components/horizontal-line'
import Slider from '@react-native-community/slider'
import sliderThumb from "../../assets/sliderThumb.png"
import SwitchOption from './settings/switch-option'
import InputOption from './settings/input-option'
import ReplayOption from './settings/replay-option'
import IntervalOption from './settings/interval-option'
import PuzzleOption from './settings/puzzle-option';
import SmartAlarmOption from './settings/smart-alarm-option'
import SongsList from './settings/songs-list/songs-list'

export default function AlarmSettings(props) {
  const { currentAlarm, changeOption } = props;

  return (
    <ScrollView contentContainerStyle={alarmSettingsStyles.scrollContainer} style={alarmSettingsStyles.container}>
      <View style={alarmSettingsStyles.optionContainer}>
        <SettingChoiceOption optionTitle="Звук" currentOption={currentAlarm.sound}>
          <SongsList currentOption={currentAlarm.sound} onChange={(value) => changeOption('sound', value)}/>
        </SettingChoiceOption>
        <Slider
          style={{ width: 320, transform: [{ scaleY: 1, }], marginTop: 10 }}
          minimumTrackTintColor='rgba(217, 51, 113, 1)'
          maximumTrackTintColor='rgba(217, 51, 113, 1)'
          thumbImage={sliderThumb}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={currentAlarm.volume}
          onValueChange={(value) => changeOption('volume', value)}></Slider>
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <InputOption optionTitle="Подпись" value={currentAlarm['description']} onChange={(value) => changeOption('description', value)} />
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <SmartAlarmOption optionTitle="Умный будильник" value={{smartAlarm: currentAlarm['smartAlarm'], timeToSleep: currentAlarm['timeToSleep'], timeToWakeUp: currentAlarm['timeToWakeUp']}} onChange={changeOption} />
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Вибрация" onPress={(isEnabled) => changeOption('useVibration', isEnabled)} isEnabled={currentAlarm.useVibration}/>
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <ReplayOption optionTitle="Повтор" currentOptions={currentAlarm.days} onChange={(value) => changeOption('days', value)} />
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <IntervalOption optionTitle="Интервал" value={String(currentAlarm.interval)} onChange={(value) => changeOption('interval', value)} />
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <PuzzleOption optionTitle="Головоломка" current={currentAlarm.puzzle} onPuzzleChange={(value) => changeOption('puzzle', value)} 
        onAmountChange={(value) => changeOption('puzzleAmount', value)} onPasswordChange={(value) => changeOption('password', value)}/>
      </View>
      <HorizontalLine />
      <View style={alarmSettingsStyles.optionContainer}>
        <SwitchOption optionName="Не будить соседа" onPress={(isEnabled) => changeOption('neighbourOption', isEnabled)} isEnabled={currentAlarm.neighbourOption}/>
      </View>
    </ScrollView>
  )
}