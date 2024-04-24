import { View, Text } from 'react-native';
import React from 'react';
import { statisticsScreenStyles } from './styles/statistics-screen-styles';

export default function StatOption({ optionTitle, optionDescription }) {

    return (
        <View style={statisticsScreenStyles.containerText}>
            <Text style={statisticsScreenStyles.general}>{optionTitle}: {optionDescription}</Text>
        </View>
    )
}
