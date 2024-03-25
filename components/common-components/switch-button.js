
import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SwitchButton({onPress, initialColor, enabledColor, initialText, enabledText}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(initialColor)
    const [circleText, setCircleText] = useState(initialText);
    const [circlePos, setCirclePos] = useState("flex-start");

    const updateSwitchButton = () => {
        let enabled = !isEnabled;
        setIsEnabled(enabled);
        setBackgroundColor(enabled ? enabledColor : initialColor);
        setCircleText(enabled ? enabledText : initialText);
        setCirclePos(enabled ? "flex-end" : "flex-start");
        onPress(enabled);
    }


  return (
    <Pressable onPress={() => updateSwitchButton()}>
        <View style={[styles.alarmSwitchButton, {backgroundColor, justifyContent: circlePos}]}>
            <View style={styles.circle}>
                <Text style={styles.circleText}>{circleText}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    alarmSwitchButton: {
        width: 89,
        height: 44,
        borderRadius: 35,
        marginRight: 15,
        display: "flex",
        flexDirection: "row"
    },
    circle: {
        width: 36,
        height: 36,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 999,
        margin: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    circleText: {
        fontSize: 25
    }
})