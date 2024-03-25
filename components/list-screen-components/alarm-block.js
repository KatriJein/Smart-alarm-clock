
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useRef } from 'react'
import SwitchButton from '../common-components/switch-button';

export default function AlarmBlock({description, alarmTime, alarmDays}) {

    const switchAlarmMode = (hasBeenEnabled) => {
    };

  return (
    <Pressable style={styles.pressArea}>
        <View style={styles.alarmBlock}>
            <View style={styles.info}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.alarmTime}>{alarmTime}</Text>
                <Text style={styles.alarmDays}>{alarmDays}</Text>
            </View>
            <View style={styles.switchButton}>
                <SwitchButton onPress={switchAlarmMode} initialColor={"rgba(201, 201, 201, 1)"} enabledColor={"rgba(224, 132, 171, 1)"}
                initialText={"X"} enabledText={"✓"}/>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressArea: {
        marginTop: 20,
    },
    alarmBlock: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 25,
        display: "flex",
        flexDirection: "row"
    },
    info: {
        width: "50%"
    },
    switchButton: {
        width: "50%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    description: {
        color: "rgba(110, 110, 110, 1)",
        marginLeft: 15,
        marginTop: 10,
        fontSize: 16
    },
    alarmTime: {
        fontSize: 38,
        marginLeft: 15,
        marginTop: 2
    },
    alarmDays: {
        color: "rgba(110, 110, 110, 1)",
        marginLeft: 15,
        marginTop: 2,
        fontSize: 18,
        marginBottom: 10
    }
})