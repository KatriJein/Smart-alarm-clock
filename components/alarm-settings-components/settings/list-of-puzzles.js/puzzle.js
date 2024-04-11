
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NAME_OF_DAY_OF_WEEK } from '../../../../const';
import { vw } from 'react-native-expo-viewport-units';
import { CORRELATE_PUZZLE_AMOUNT_OPTION } from '../../../../const';
import ButtonBack from '../../../button-back';
import Gradient from '../../../Gradient';
import Amount from './amount';
import { choiceStyles } from './styles/choice-styles';
import Password from './password';


export default function Puzzle(props) {

    const [amountChoices, setAmountChoices] = useState([]);
    const [chosenAmount, setChosenAmount] = useState(0);
    const [amountChoiceModalVisible, setAmountChoiceModalVisible] = useState(false);
    const [hasChosenAmount, setHasChosenAmount] = useState(false);
    const [hasInputPassword, setHasInputPassword] = useState(false);
    const [passwordInputModalVisible, setPasswordInputModalVisible] = useState(false);

    const onPuzzleOptionPress = () => {
        const choices = CORRELATE_PUZZLE_AMOUNT_OPTION[value];
        if (choices.length > 1) {
            setAmountChoices(choices);
            setChosenAmount(0);
            setHasChosenAmount(false);
            setAmountChoiceModalVisible(true);
        }
        if (choices.length === 1) {
            onPasswordChange("");
            setHasInputPassword(false);
            setPasswordInputModalVisible(true);
        }
        onPuzzlePress();
    }

    const onAmountOptionPress = (amount) => {
        setChosenAmount(amount);
        setHasChosenAmount(true);
        onAmountPress(amount);
    }

    const { value, onPuzzlePress, onAmountPress, onPasswordChange, isSelected } = props;
    return (
        <>
        <TouchableOpacity onPress={() => onPuzzleOptionPress()} style={[choiceStyles.container, isSelected ? choiceStyles.selected : null]}>
            <Text style={choiceStyles.text}>{value}</Text>
        </TouchableOpacity>
        <Modal
        animationType='slide'
        visible={amountChoiceModalVisible}
        onRequestClose={() => { setAmountChoiceModalVisible(false) }}>
            <Gradient>
                <View style={styles.modal}>
                    {hasChosenAmount ? <ButtonBack onBackPress={() => setAmountChoiceModalVisible(false)} /> : <></>}
                    <Text style={styles.amountTitle}>Количество</Text>
                    <View style={styles.amountList}>
                        {amountChoices.length > 0 && amountChoices.map(amount => <Amount key={amount} isSelected={amount === chosenAmount}
                        onPress={() => onAmountOptionPress(amount)} value={amount}/>)}
                    </View>
                </View>
            </Gradient>
        </Modal>
        <Modal
        animationType='slide'
        visible={passwordInputModalVisible}
        onRequestClose={() => { setPasswordInputModalVisible(false) }}>
            <Gradient>
                <View style={styles.modal}>
                    {hasInputPassword ? <ButtonBack onBackPress={() => setPasswordInputModalVisible(false)} /> : <></>}
                    <View style={styles.passwordView}>
                        <Password onChange={(value) => onPasswordChange(value)} setIsGoodPassword={setHasInputPassword}/>
                    </View>
                </View>
            </Gradient>
        </Modal>
    </>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    passwordView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%'
    },
    amountTitle: {
        fontFamily: 'kyiv-type',
        marginBottom: 10,
        fontSize: 28
    }
});