
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { passwordRuleStyles } from './styles/password-rule-styles'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PasswordRule({password, description, isSatisfied, passwordChangeCallback}) {

    useEffect(() => {
        passwordChangeCallback();
    }, [password])

    return (
        <View style={passwordRuleStyles.view}>
            {isSatisfied
            ? <Ionicons style={passwordRuleStyles.icon} name="checkmark" size={30} color={'rgba(30, 181, 19, 1)'} />
            : <Ionicons style={passwordRuleStyles.icon} name="close" size={30} color={'rgba(181, 41, 19, 1)'} />}
        <Text style={{fontSize: 18}}>{description}</Text>
        </View>
  )
}