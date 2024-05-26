
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import React from 'react';
import SwitchButton from '../common-components/switch-button';
import { styles as alarmBlockStyles } from './styles/alarm-block-styles';
import { useNavigation } from '@react-navigation/native';
import { CalculateSecondsToRing, scheduleAlarm } from '../common-functions/CommonFunctions';
import { humanizeListOfDays } from '../../const';
import { switchAlarm, updateNotificationId, deleteAlarm } from '../../store/alarmReducer';
import { useDispatch } from "react-redux"
import { CORRELATE_SOUND_NAMES } from '../../const';
import { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import notifee from "@notifee/react-native"

let LIST_ITEM_HEIGHT = 122;

export default function AlarmBlock(props) {
    const { alarm, simultaneousHandlers } = props;
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
    const marginTop = useSharedValue(20);
    const opacity = useSharedValue(1);

    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.15;

    async function deleteAlarmHandler() {
        await notifee.cancelTriggerNotification(alarm.notificationId);
        dispatch(deleteAlarm({ id: alarm.id }));
    }

    const panGesture = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            const deltaX = event.translationX;
            if (deltaX < 0 && translateX.value > TRANSLATE_X_THRESHOLD) {
                translateX.value = ctx.startX + deltaX;
            }
        },
        onEnd: (event) => {
            const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-SCREEN_WIDTH);
                itemHeight.value = withTiming(0);
                marginTop.value = withTiming(0);
                opacity.value = withTiming(0, undefined, (isFinished) => {
                    if (isFinished) {
                        runOnJS(deleteAlarmHandler)();
                    }
                });
            } else {
                translateX.value = withTiming(0);
            }
        }
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }));

    const rContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginTop: marginTop.value,
            opacity: opacity.value
        }
    })

    const switchAlarmMode = async (hasBeenEnabled) => {
        dispatch(switchAlarm({ alarmId: alarm.id, hasBeenEnabled: hasBeenEnabled }));
        if (hasBeenEnabled) {
            await notifee.cancelTriggerNotification(alarm.notificationId);
            let seconds = CalculateSecondsToRing(alarm.time, alarm.days);
            const res = await scheduleAlarm(alarm.name, alarm.description, seconds, CORRELATE_SOUND_NAMES[alarm.sound], alarm.useVibration, alarm.volume);
            dispatch(updateNotificationId({alarmId: alarm.id, notificationId: res}));
            }
        else {
            await notifee.cancelTriggerNotification(alarm.notificationId);
            dispatch(updateNotificationId({ alarmId: alarm.id, notificationId: "" }))
        }
    }

    return (
        <Animated.View style={rContainerStyle}>
            <View style={styles.iconContainer}>
                <Ionicons style={styles.icon} name="trash-outline" size={45} color="white" />
            </View>
            <Pressable onPress={() => navigation.navigate('Alarm details', { alarm })}>
                <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
                    <Animated.View style={rStyle}>
                        <View style={alarmBlockStyles.alarmBlock}>
                            <View style={alarmBlockStyles.info}>
                                <Text style={alarmBlockStyles.description}>{alarm.name}</Text>
                                <Text style={alarmBlockStyles.alarmTime}>{alarm.time}</Text>
                                <Text style={alarmBlockStyles.alarmDays}>{humanizeListOfDays(alarm.days)}</Text>
                            </View>
                            <View style={alarmBlockStyles.switchButton}>
                                <SwitchButton onPress={switchAlarmMode} initialColor={"rgba(201, 201, 201, 1)"} enabledColor={"rgba(224, 132, 171, 1)"}
                                    initialSign={<Ionicons name="close-outline" size={30} color="black" />} enabledSign={<Ionicons name="checkmark-outline" size={30} color="black" />} width={89} height={44} circleSize={36} isEnabled={alarm.isEnabled} />
                            </View>
                        </View>
                    </Animated.View>
                </PanGestureHandler>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f75551',
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        marginRight: 20
    },
    pressArea: {
        marginTop: 20
    }
});
