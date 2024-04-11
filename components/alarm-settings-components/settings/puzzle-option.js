
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { inputOptionStyles } from '../styles/input-option-styles';
import ButtonBack from '../../button-back';
import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { settingOptionStyles } from '../styles/setting-option-styles';
import nextArrow from "../../../assets/nextArrow.png"
import { humanizeListOfDays } from '../../../const';
import ListOfDays from './list-of-days.js/list-of-days';
import { useEffect } from 'react';
import { NAME_OF_DAY_OF_WEEK } from '../../../const';
import { Ionicons } from '@expo/vector-icons';
import ListOfPuzzles from './list-of-puzzles.js/list-of-puzzles';
import { PUZZLES } from '../../../const';
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

export default function PuzzleOption(props) {
    const { optionTitle, current, onPuzzleChange, onAmountChange, onPasswordChange } = props;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={settingOptionStyles.container}>
            <Text style={settingOptionStyles.optionName}>{optionTitle}:</Text>
            <TouchableOpacity style={settingOptionStyles.choiceView} onPress={() => setModalVisible(true)}>
                <Text style={settingOptionStyles.optionChoice}>{current}</Text>
                <Ionicons style={settingOptionStyles.arrow} name="chevron-forward-outline" size={25} color="black" />
            </TouchableOpacity>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
            >
                <Gradient>
                    <View style={styles.modal}>
                        <ButtonBack onBackPress={() => setModalVisible(false)} />
                        <ListOfPuzzles puzzles={PUZZLES} onPuzzlePress={onPuzzleChange} onAmountPress={onAmountChange} onPasswordChange={onPasswordChange}
                         title={optionTitle} selectedPuzzle={current} />
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
    textInputModal: {
        borderColor: 'black',
        borderWidth: 2,
        width: '80%',
        fontFamily: 'montserrat-alt-medium',
        fontSize: 20,
        padding: 10
    },
});