import { StyleSheet, View } from 'react-native';
import { STATUSBAR_HEIGHT } from '../../../const';
import DayDetailsHeader from './day-details-header';
import DayDetailsOptions from './day-details-options';
import Gradient from '../../Gradient';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addDate } from '../../../store/calendarReducer';

const defaultState = {
    hours: null,
    quality: null,
    activity: [],
    businessDuringDay: [],
    drinks: [],
    timeToSleep: null,
    timeToWake: null,
    delayedAlarms: 0,
    timeTookToSleep: null,
    timeTookToWake: null,
};

export default function DayDetails({ route }) {
    const { date } = route.params;

    const state = useSelector((state) => state.calendar.dailyStats[date.dateString]);
    const [selectedOptions, setSelectedOptions] = useState(state || defaultState);

    const dispatch = useDispatch();

    function handleSingleOptionSelect(sectionId, option) {
        setSelectedOptions(prev => ({
            ...prev,
            [sectionId]: option
        }));
    };

    function handleSeveralOptionSelect(sectionId, option) {
        let options = [...selectedOptions[sectionId]];
        if (sectionId === 'activity' && option === 'активности не было' && !options.includes(option)) {
            setSelectedOptions(prev => ({
                ...prev,
                [sectionId]: ['активности не было']
            }));
            return;
        }
        if (sectionId === 'activity' && options.includes('активности не было')) {
            if (option === 'активности не было') {
                setSelectedOptions(prev => ({
                    ...prev,
                    [sectionId]: []
                }));
            }
            return;
        }
        if (options.includes(option)) {
            options = options.filter((item) => (item !== option))
        } else {
            options.push(option);
        }
        setSelectedOptions(prev => ({
            ...prev,
            [sectionId]: options
        }));
    };

    function handleBackButton() {
        if (selectedOptions != defaultState) {
            dispatch(addDate({ date: date.dateString, options: { ...selectedOptions } }));
        }
    };

    console.log(selectedOptions);

    return (
        <Gradient key={date.dateString}>
            <View style={styles.container}>
                <DayDetailsHeader onClick={handleBackButton} change={selectedOptions != defaultState} date={date} />
                <DayDetailsOptions selectedOptions={selectedOptions} handleSingleOptionSelect={handleSingleOptionSelect} handleSeveralOptionSelect={handleSeveralOptionSelect} />
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
