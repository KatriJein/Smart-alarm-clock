import { alarmTitleStyles } from "./styles/alarm-title-styles";
import pencil from "../../assets/pencil.png";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function AlarmTitle(props) {
    const {title, changeOption} = props;

    const [pencilVisible, setPencilVisible] = useState(true);
    // const [isOriginal, setIsOriginal] = useState(true);

    // useEffect(() => {
    //     if (!isOriginal) {
    //         setTitle("");
    //         setPencilVisible(false);
    //     }
    // }, [isOriginal])

    // const endInput = () => {
    //     if (title === "") {
    //         setTitle("Название");
    //         setPencilVisible(true);
    //         setIsOriginal(true);
    //     }
    // }

    // const onInputChange = (text) => {
    //     setTitle(text);
    // }

  return (
    <Pressable style={alarmTitleStyles.container}>
        <View style={alarmTitleStyles.titleView}>
            <TextInput onChangeText={(value) => changeOption(value)}
            style={alarmTitleStyles.title} maxLength={15}>{title}</TextInput>
            <Ionicons name="pencil" style={[alarmTitleStyles.pencil, {display: (pencilVisible ? "flex" : "none")}]} size={26} color="black" />
            {/* <Image source={pencil} style={[alarmTitleStyles.pencilImage, {display: (pencilVisible ? "flex" : "none")}]}/> */}
        </View>
    </Pressable>
  )
}