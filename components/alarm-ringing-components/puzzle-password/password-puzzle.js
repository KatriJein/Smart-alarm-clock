
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { passwordPuzzlePageStyles } from './password-puzzle-styles'
import Gradient from '../../Gradient'
import {useNavigation } from "@react-navigation/native"
import { commonStyles } from '../../../common-styles'
import { MAX_PASSWORD_LENGTH, SELECTABLE_FROM_PASSWORD_PUZZLES, CORRELATE_PAGES } from '../../../const'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PasswordPuzzle({route}) {
    const { amount, password } = route.params;
    const navigation = useNavigation();
    const [passwordInput, setPasswordInput] = useState("");
    const [isCorrectPassword, setIsCorrectPassword] = useState(false);

    const updatePassword = (text) => {
        setPasswordInput(text);
    }

    const selectPuzzle = () => {
        const puzzle = SELECTABLE_FROM_PASSWORD_PUZZLES[Math.round(Math.random() * (SELECTABLE_FROM_PASSWORD_PUZZLES.length - 1))];
        const page = CORRELATE_PAGES[puzzle];
        navigation.navigate(page, {amount: amount});
    }

    useEffect(() => {
        if (passwordInput === password) {
            setIsCorrectPassword(true);
            setTimeout(() => {
                navigation.navigate("RingPage", {canStop: true})
            }, 500)
        }
    }, [passwordInput])

    return (
        <Gradient>
            <View style={commonStyles.container}>
                <Text style={passwordPuzzlePageStyles.label}>Введите пароль:</Text>
                <View style={passwordPuzzlePageStyles.passwordView}>
                    <TextInput maxLength={MAX_PASSWORD_LENGTH} style={passwordPuzzlePageStyles.passwordInput}
                    placeholder='12345' secureTextEntry={true} onChangeText={(text) => updatePassword(text)}
                    editable={isCorrectPassword ? false : true}/>
                    {isCorrectPassword
                    ? <Ionicons style={passwordPuzzlePageStyles.icon} name="checkmark" size={30} color={'rgba(30, 181, 19, 1)'} />
                    : <Ionicons style={passwordPuzzlePageStyles.icon} name="close" size={30} color={'rgba(181, 41, 19, 1)'} />}
                </View>
                <TouchableOpacity disabled={isCorrectPassword ? true : false} style={passwordPuzzlePageStyles.dontRememberPasswordView}
                onPress={() => selectPuzzle()}>
                    <Text style={passwordPuzzlePageStyles.forgotPasswordBtn}>Не помню пароль!</Text>
                </TouchableOpacity>
            </View>
        </Gradient>
  )
}