import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import { CalendarList } from 'react-native-calendars';
import { vw} from 'react-native-expo-viewport-units';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';


LocaleConfig.locales['ru'] = {
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    today: "Сегодня"
};

LocaleConfig.defaultLocale = 'ru';

export default function Calendar() {
    const navigation = useNavigation();

    function onPressDay(date) {
        navigation.navigate("Day details", { date })
    }

    function dayView({ date, state, marking }) {
        return <TouchableOpacity onPress={() => onPressDay(date)} activeOpacity={0.6}>
            <View style={stylesDay.container}>
                <Text style={stylesDay.text}>{date.day}</Text>
                <View style={!marking ? stylesDay.marked : ''} />
            </View>
        </TouchableOpacity>
    }

    return (
        <CalendarList
            style={styles.container}
            dayComponent={dayView}
            theme={{
                calendarBackground: 'transparent',
                'stylesheet.calendar.header': {
                    header: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 6,
                        alignItems: 'center',
                        borderColor: '#ECB9C8',
                        borderBottomWidth: 2,
                        borderTopWidth: 2,
                    },
                    dayHeader: {
                        marginTop: 2,
                        marginBottom: 10,
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'lato-regular',
                        fontWeight: 400,
                        color: '#802245',
                    }, monthText: {
                        fontSize: 22,
                        fontFamily: 'lato-regular',
                        color: '#802245',
                        margin: 10,
                    }
                }
            }}
            firstDay={1}
            // scrollEnabled={true}
            // showScrollIndicator={true}
            monthFormat={'MMMM, yyyy'}
        />
    );
}



const stylesDay = StyleSheet.create({
    marked: {
        height: '22%',
        width: '92%',
        backgroundColor: '#49569B',
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        position: 'absolute',
        bottom: '3%'
    },
    container: {
        width: vw(12),
        height: vw(12),
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'inter-regular',
        fontSize: Math.round(vw(5.5)),
    },
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: 'montserrat-alt-medium',
        fontSize: 38,
        justifyContent: 'center'
    }
});