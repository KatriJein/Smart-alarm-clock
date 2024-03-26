import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../common-styles';
import { LocaleConfig } from 'react-native-calendars';
import { CalendarList } from 'react-native-calendars';
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
    return (
        <CalendarList
            style={{
                height: 600,
                width: '100%',
                // borderTopWidth: 3,
                // borderTopColor: '#911e42',
            }}
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
            scrollEnabled={true}
            showScrollIndicator={true}
            monthFormat={'MMMM, yyyy'}
            maxDate={dayjs().format('YYYY-MM-DD')}
        />
    );
}

function dayView({ date, state, marking }) {
    return <TouchableOpacity activeOpacity={0.8}><View style={stylesDay.container}>
        <Text style={stylesDay.text}>{date.day}</Text>
        <View style={!marking ? stylesDay.marked : ''} />
    </View></TouchableOpacity>
}

const stylesDay = StyleSheet.create({
    marked: {
        height: 11,
        width: 46,
        backgroundColor: '#49569B',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        position: 'absolute',
        top: 37
    },
    container: {
        width: 50,
        height: 50,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'inter-regular',
        fontSize: 20,
        position: 'absolute',
        top: 10
    },
});

const styles = StyleSheet.create({
    container: {
        width: 393,
        height: 544,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'montserrat-alt-medium',
        fontSize: 38,
        justifyContent: 'center'
    }
});