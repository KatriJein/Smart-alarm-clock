import { StyleSheet, View } from 'react-native';
import { STATUSBAR_HEIGHT } from '../../../const';
import DayDetailsHeader from './day-details-header';
import DayDetailsOptions from './day-details-options';
import Gradient from '../../Gradient';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addDate } from '../../../store/calendarReducer';
import { addAverageHours } from '../../../store/statisticsReducer';

const defaultState = {
    hours: null,
    quality: null,
    mood: null,
    activity: null,
    dayMood: null,
    factors: null
};

export default function DayDetails({ route }) {
    const { date } = route.params;

    const state = useSelector((state) => state.calendar.dailyStats[date.dateString]);
    const [selectedOptions, setSelectedOptions] = useState(state || defaultState);

    const dispatch = useDispatch();

    function handleOptionSelect(sectionId, option) {
        setSelectedOptions(prev => ({
            ...prev,
            [sectionId]: option
        }));
    };

    function handleBackButton() {
        if (selectedOptions != defaultState) {
            dispatch(addDate({date: date.dateString, options: {...selectedOptions}}));
        }
        if (!!selectedOptions.hours) {
            dispatch(addAverageHours(selectedOptions.hours));
        }
    };

    return (
        <Gradient key={date.dateString}>
            <View style={styles.container}>
                <DayDetailsHeader onClick={handleBackButton} change={selectedOptions != defaultState} date={date} />
                <DayDetailsOptions selectedOptions={selectedOptions} handleOptionSelect={handleOptionSelect} />
            </View>
        </Gradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: STATUSBAR_HEIGHT
    },
});
