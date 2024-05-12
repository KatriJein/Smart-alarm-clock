import { ScrollView, StyleSheet } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import OptionsList from './options-list';
import OptionsInput from './options-input';
import { OPTIONS_LIST } from '../../../const';
import { useState } from 'react';
import HorizontalLine from '../../common-components/horizontal-line'; 


export default function DayDetailsOptions(props) {
    const { selectedOptions, handleSingleOptionSelect, handleSeveralOptionSelect } = props;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <OptionsInput
                optionTitle='Часов сна'
                optionPlaceholder='8'
                selectedOption={selectedOptions['hours']}
                onSelect={(option) => handleSingleOptionSelect('hours', option)} />
            <OptionsInput
                optionTitle='Время, которое понадобилось, чтобы уснуть (мин)'
                optionPlaceholder='15'
                selectedOption={selectedOptions['timeTookToSleep']}
                onSelect={(option) => handleSingleOptionSelect('timeTookToSleep', option)} />
            {OPTIONS_LIST.map((item) => <OptionsList
                selectedOption={selectedOptions[item.id]}
                onSelect={(option) => item.several ? handleSeveralOptionSelect(item.id, option) : handleSingleOptionSelect(item.id, option)}
                data={item}
                key={item.id} />)}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '80%',
    },
});

