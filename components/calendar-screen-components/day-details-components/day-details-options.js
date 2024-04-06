import { ScrollView, StyleSheet } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import OptionsList from './options-list';
import OptionsInput from './options-input';
import { OPTIONS_LIST } from '../../../const';
import { useState } from 'react';


export default function DayDetailsOptions(props) {
    const { selectedOptions, handleOptionSelect } = props;
    return (
        <ScrollView style={styles.container}>
            <OptionsInput
                selectedOption={selectedOptions['hours']}
                onSelect={(option) => handleOptionSelect('hours', option)} />

            {OPTIONS_LIST.map((item) => <OptionsList
                selectedOption={selectedOptions[item.id]}
                onSelect={(option) => handleOptionSelect(item.id, option)}
                data={item}
                key={item.id} />)}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '80%',
    },
    text: {
        fontFamily: 'montserrat-alt-medium',
        color: '#000'
    },
    text1: {
        fontSize: Math.round(vw(8))
    },
    text2: {
        fontSize: Math.round(vw(6.5)),
        marginTop: '0.5%'
    }
});

