
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ButtonBack from '../../button-back';
import { vw } from 'react-native-expo-viewport-units';
import { Ionicons } from '@expo/vector-icons';
import { settingOptionStyles } from '../styles/setting-option-styles';
import Gradient from '../../Gradient';
import SwitchButton from '../../common-components/switch-button';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { parseTimeToDate } from '../../../const';
import { calculateBestWakeUpTimes } from '../../../const';

export default function SmartAlarmOption({ optionTitle, value, onChange }) {
    const { smartAlarm, timeToWakeUp, timeToSleep } = value;
    const [time, setTime] = useState({
        timeToWakeUp: timeToWakeUp || '07:00',
        timeToSleep: timeToSleep || dayjs().format('HH:mm')
    });
    const [currTime, setCurrTime] = useState(new Date());
    const [onChangeF, setOnChange] = useState();
    const [showPicker, setShowPicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [switchh, setSwitch] = useState(smartAlarm);

    function onPressBackButton() {
        setModalVisible(false)
        onChange('smartAlarm', switchh);
        onChange('timeToWakeUp', time.timeToWakeUp);
        onChange('timeToSleep', time.timeToSleep);
    }

    function showMode(time, onChange) {
        setCurrTime(parseTimeToDate(time));
        setOnChange(onChange);
        setShowPicker(true);
    }

    const onChangeWakeUpTime = (event, selectedTime) => {
        const currentTime = selectedTime || time.timeToWakeUp;
        setTime({ ...time, timeToWakeUp: dayjs(currentTime).format('HH:mm') });
        setShowPicker(false);
    }

    const onChangeSleepTime = (event, selectedTime) => {
        const currentTime = selectedTime || time.timeToSleep;
        setTime({ ...time, timeToSleep: dayjs(currentTime).format('HH:mm') });
        setShowPicker(false);
    }

    return (
        <View style={settingOptionStyles.container}>
            <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
            <TouchableOpacity style={styles.choiceView} onPress={() => setModalVisible(true)}>
                <Ionicons style={settingOptionStyles.arrow} name="chevron-forward-outline" size={25} color="black" />
            </TouchableOpacity>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false); onPressBackButton(); }}
            >
                <Gradient>
                    <View style={styles.modal}>
                        <ButtonBack onBackPress={() => onPressBackButton()} />
                        <View style={styles.container}>
                            <View style={styles.option}>
                                <Text style={[styles.text, styles.title, { top: -2 }]}>Функция умный будильник:</Text>
                                <SwitchButton style={styles.switch} initialSign={<Ionicons name="close-outline" size={22} color="black" />} enabledSign={<Ionicons name="checkmark-outline" size={22} color="black" />} width={65} height={32} circleSize={24}
                                    initialColor='rgba(180, 180, 180, 1)' enabledColor='rgba(237, 156, 190, 1)' onPress={(value) => setSwitch(value)} isEnabled={switchh} />
                            </View>
                            {switchh && <View style={{ rowGap: 10 }}><View style={styles.option}>
                                <Text style={[styles.text, styles.title2]}>Во сколько вы заснете?</Text>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => showMode(time.timeToSleep, () => onChangeSleepTime)}>
                                    <View style={styles.time}>
                                        <Text style={[styles.text, styles.title2]}>{time.timeToSleep}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                                <View style={styles.option}>
                                    <Text style={[styles.text, styles.title2]}>Во сколько вам нужно встать?</Text>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => showMode(time.timeToWakeUp, () => onChangeWakeUpTime)}>
                                        <View style={styles.time}>
                                            <Text style={[styles.text, styles.title2]}>{time.timeToWakeUp}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.option, styles.option2]}>
                                    <Text style={[styles.text, styles.title2]}>Может вы хотите поставить будильник на это время?</Text>
                                    <View style={styles.list}>
                                        {calculateBestWakeUpTimes(time.timeToSleep, time.timeToWakeUp).map(item => <TouchableOpacity key={item} activeOpacity={0.6} onPress={() => onChange('time', item)}>
                                            <View style={styles.time}>
                                                <Text style={[styles.text, styles.title2]}>{item}</Text>
                                            </View>
                                        </TouchableOpacity>)}
                                    </View>
                                </View>
                                {showPicker && <DateTimePicker
                                    value={currTime}
                                    mode='time'
                                    is24Hour={true}
                                    display='spinner'
                                    onChange={onChangeF} />}</View>}
                        </View>
                    </View>
                </Gradient>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        paddingTop: 30
    },
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        columnGap: 30,
        rowGap: 20,
        padding: 10,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
    time: {
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 18
    },
    option2: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        rowGap: 10
    },
    list: {
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'lato-regular',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(5.5)),
    },
    title2: {
        fontSize: Math.round(vw(4.9)),
    },
    choiceView: {
        width: '30%',
        height: '90%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
});
