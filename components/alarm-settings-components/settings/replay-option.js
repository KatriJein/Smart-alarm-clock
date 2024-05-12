
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ButtonBack from '../../button-back';
import React, { useState } from 'react';
import { settingOptionStyles } from '../styles/setting-option-styles';
import { humanizeListOfDays } from '../../../const';
import ListOfDays from './list-of-days.js/list-of-days';
import { useEffect } from 'react';
import { NAME_OF_DAY_OF_WEEK } from '../../../const';
import { Ionicons } from '@expo/vector-icons';
import Gradient from '../../Gradient';

function initDays(selectedDays) {
    const days = {};
    Object.keys(NAME_OF_DAY_OF_WEEK).forEach(item => {
        if (selectedDays.includes(+item)) {
            days[item] = true;
        } else {
            days[item] = false;
        }
    })
    return days;
};

function convertToArray(object) {
    const arr = [];
    Object.entries(object).forEach(([key, value]) => {
        if (value) {
            arr.push(+key);
        }
    })
    return arr;
};

export default function ReplayOption(props) {
    const { optionTitle, currentOptions, onChange } = props;
    const [selectedDays, setSelectedDays] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    function onPressBackButton() {
        onChange(convertToArray(selectedDays));
        setModalVisible(false);
    }

    useEffect(() => {
        setSelectedDays(initDays(currentOptions));
    }, []);

    function toggleDaySelection(day) {
        setSelectedDays(prev => ({
            ...prev,
            [day]: !prev[day]
        }));
    };


    return (
        <View style={settingOptionStyles.container}>
            <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
            <TouchableOpacity style={settingOptionStyles.choiceView} onPress={() => setModalVisible(true)}>
                <Text style={settingOptionStyles.optionChoice}>{humanizeListOfDays(convertToArray(selectedDays))}</Text>
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
                        <ListOfDays selectedDays={selectedDays} onPress={toggleDaySelection} />
                    </View>
                </Gradient>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});