import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../../common-styles';
import { LinearGradient } from 'expo-linear-gradient';
import { STATUSBAR_HEIGHT, NAME_OF_MONTHS } from '../../../const';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import OptionsList from './options-list';
import OptionsInput from './options-input';


export default function DayDetailsOptions() {
    const optionsList = [{
        title: 'Качество сна',
        options: ['крепкий', 'прерывистый', 'плохой', 'крепкий', 'что-то ещё']
    }, {
        title: 'Настроение при пробуждении',
        options: ['бодрое', 'вялое', 'тревожное']
    }, {
        title: 'Занятие перед сном',
        options: ['работа/ учеба', 'просмотр видео', 'чтение', 'медитация', 'теплая ванна']
    }, {
        title: 'Настроение во время дня',
        options: ['стресс', 'радость', 'усталость']
    }, {
        title: 'Факторы влияющие на сон',
        options: ['алкоголь', 'поздний прием пищи', 'кофе', 'таблетка снотворного', 'болезнь']
    }];

    return (
        <ScrollView style={styles.container}>
            <OptionsInput />
            {optionsList.map((item) => <OptionsList data={item} />)}
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

