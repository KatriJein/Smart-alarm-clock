
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles as barStyles } from './styles/alarm-bar-styles'
import backArrow from "../../assets/backArrow.png"
import { useNavigation } from '@react-navigation/native'

export default function AlarmBar() {

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.navigate("AlarmList");
    }

  return (
    <Pressable style={barStyles.bar} onPress={() => onBackPress()}>
        <View>
        <View style={barStyles.backView}>
            <Image source={backArrow}/>
            <Text style={barStyles.backText}>Назад</Text>
        </View>
        </View>
    </Pressable>
  )
}