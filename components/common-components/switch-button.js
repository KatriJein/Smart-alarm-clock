
import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { styles as switchButtonStyles } from '../list-screen-components/styles/switch-button-styles';

export default function SwitchButton({onPress, initialColor, enabledColor, initialSign, enabledSign}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(initialColor)
    const [circleText, setCircleText] = useState(initialSign);
    const [circlePos, setCirclePos] = useState("flex-start");

    const updateSwitchButton = () => {
        let enabled = !isEnabled;
        setIsEnabled(enabled);
        setBackgroundColor(enabled ? enabledColor : initialColor);
        setCircleText(enabled ? enabledSign : initialSign);
        setCirclePos(enabled ? "flex-end" : "flex-start");
        onPress(enabled);
    }


  return (
    <Pressable onPress={() => updateSwitchButton()}>
        <View style={[switchButtonStyles.alarmSwitchButton, {backgroundColor, justifyContent: circlePos}]}>
            <View style={switchButtonStyles.circle}>
                <Image source={circleText}/>
            </View>
        </View>
    </Pressable>
  )
}