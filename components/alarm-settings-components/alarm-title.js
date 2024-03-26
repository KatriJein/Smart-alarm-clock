import { alarmTitleStyles } from "./styles/alarm-title-styles";
import pencil from "../../assets/pencil.png"

import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function AlarmTitle({title, setTitle}) {

    const [pencilVisible, setPencilVisible] = useState(true);
    const [isOriginal, setIsOriginal] = useState(true);

    useEffect(() => {
        if (!isOriginal) {
            setTitle("");
            setPencilVisible(false);
        }
    }, [isOriginal])

    const endInput = () => {
        if (title === "") {
            setTitle("Название");
            setPencilVisible(true);
            setIsOriginal(true);
        }
    }

    const onInputChange = (text) => {
        setTitle(text);
    }

  return (
    <Pressable style={alarmTitleStyles.container}>
        <View style={alarmTitleStyles.titleView}>
            <TextInput onFocus={() => setIsOriginal(false)} onChangeText={(text) => onInputChange(text)} onEndEditing={() => endInput()}
            style={alarmTitleStyles.title}>{title}</TextInput>
            <Image source={pencil} style={[alarmTitleStyles.pencilImage, {display: (pencilVisible ? "flex" : "none")}]}/>
        </View>
    </Pressable>
  )
}