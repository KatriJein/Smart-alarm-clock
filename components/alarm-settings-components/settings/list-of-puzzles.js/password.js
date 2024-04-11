
import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../../../../const';
import { passwordPageStyles } from './styles/password-page-styles';
import PasswordRule from './password-rule';

export default function Password({onChange, setIsGoodPassword}) {

    const [password, setPassword] = useState("");
    const [containsRightAmount, setContainsRightAmount] = useState(false);
    const [containsDigit, setContainsDigit] = useState(false);
    const [containsUpperAndLowSymbols, setContainsUpperAndLowSymbols] = useState(false);

    const onPasswordChange = (text) => {
        onChange(text);
        setPassword(text);
    }

    const checkRightAmount = () => {
        const isRightAmount = password.length >= MIN_PASSWORD_LENGTH && password.length <= MAX_PASSWORD_LENGTH;
        setContainsRightAmount(isRightAmount);
    }

    const checkDigits = () => {
        const hasDigits = /\d/.test(password);
        setContainsDigit(hasDigits);
    }

    const checkSymbols = () => {
        const hasUpperLowSymbols = /[A-ZА-Я]+/.test(password) && /[a-zа-я]+/.test(password);
        setContainsUpperAndLowSymbols(hasUpperLowSymbols);
    }

    useEffect(() => {
        if (containsRightAmount && containsDigit && containsUpperAndLowSymbols) {
            setIsGoodPassword(true);
        }
        else {
            setIsGoodPassword(false);
        }
    }, [containsRightAmount, containsDigit, containsUpperAndLowSymbols])

    return (
        <View style={passwordPageStyles.passView}>
            <Text style={passwordPageStyles.title}>Установите пароль:</Text>
            <TextInput placeholder='12345' secureTextEntry={true} style={passwordPageStyles.passwordInput}
            maxLength={MAX_PASSWORD_LENGTH} onChangeText={(text) => onPasswordChange(text)}/>
            <View style={passwordPageStyles.rulesView}>
                <PasswordRule password={password} description={"Длина от 8 до 20 символов"} isSatisfied={containsRightAmount}
                passwordChangeCallback={checkRightAmount}/>
                <PasswordRule password={password} description={"Содержит цифры"} isSatisfied={containsDigit} passwordChangeCallback={checkDigits}/>
                <PasswordRule password={password} description={"Содержит заглавные и строчные буквы"} isSatisfied={containsUpperAndLowSymbols} 
                passwordChangeCallback={checkSymbols}/>
            </View>
        </View>
  )
}