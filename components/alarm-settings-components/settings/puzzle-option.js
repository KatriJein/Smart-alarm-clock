
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ButtonBack from '../../button-back';
import React, { useState } from 'react';
import { settingOptionStyles } from '../styles/setting-option-styles';
import { Ionicons } from '@expo/vector-icons';
import ListOfPuzzles from './list-of-puzzles.js/list-of-puzzles';
import { PUZZLES } from '../../../const';
import Gradient from '../../Gradient';

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
});