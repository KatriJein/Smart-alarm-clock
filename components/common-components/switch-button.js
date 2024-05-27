
import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles as switchButtonStyles } from './styles/switch-button-styles';

export default function SwitchButton(props) {
    const {onPress, initialColor, enabledColor, initialSign, enabledSign, width, height, circleSize, isEnabled} = props;
    const [enabled, setEnabled] = useState(!isEnabled);
    const [backgroundColor, setBackgroundColor] = useState(initialColor)
    const [circleText, setCircleText] = useState(initialSign);
    const [circlePos, setCirclePos] = useState("flex-start");

    const updateSwitchButton = () => {
        let curState = !enabled;
        setEnabled(curState);
        setBackgroundColor(curState ? enabledColor : initialColor);
        setCircleText(curState ? enabledSign : initialSign);
        setCirclePos(curState ? "flex-end" : "flex-start");
        onPress(curState);
    }

    useEffect(() => {
        updateSwitchButton();
    }, [])


  return (
    <Pressable onPress={() => updateSwitchButton()}>
        <View style={[switchButtonStyles.alarmSwitchButton, {backgroundColor, justifyContent: circlePos, width: width, height: height}]}>
            <View style={[switchButtonStyles.circle, {width: circleSize, height: circleSize}]}>
                {circleText}
            </View>
        </View>
    </Pressable>
  )
}