import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const NAME_OF_MONTHS = {
    1: 'января',
    2: 'февраля',
    3: 'марта',
    4: 'апреля',
    5: 'майя',
    6: 'июня',
    7: 'июля',
    8: 'августа',
    9: 'сентября',
    10: 'октября',
    11: 'ноября',
    12: 'декабря',
};

const NAME_OF_DAY_OF_WEEK = {
    0: 'Вс',
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
};

function humanizeListOfDays(arr) {
    let string = '';
    arr.forEach(item => {
        string = string + NAME_OF_DAY_OF_WEEK[item] + ' ';
    });
    return string.trim();
};

const OPTIONS_LIST = [{
    id: 'quality',
    title: 'Качество сна',
    options: ['крепкий', 'прерывистый', 'плохой']
}, {
    id: 'mood',
    title: 'Настроение при пробуждении',
    options: ['бодрое', 'вялое', 'тревожное']
}, {
    id: 'activity',
    title: 'Занятие перед сном',
    options: ['работа/ учеба', 'просмотр видео', 'чтение', 'медитация', 'теплая ванна']
}, {
    id: 'dayMood',
    title: 'Настроение во время дня',
    options: ['стресс', 'радость', 'усталость']
}, {
    id: 'factors',
    title: 'Факторы влияющие на сон',
    options: ['алкоголь', 'поздний прием пищи', 'кофе', 'таблетка снотворного', 'болезнь']
}];

const PUZZLES = ['Математический пример', 'Пароль', 'Карточки', 'Текст'];

const SETTINGS = [{ title: 'Почта:', info: 'example@gmail.com' },
{ title: 'Номер телефона:', info: '+7 922 999-99-99' },
{ title: 'Тема:', info: 'Кварц' },
{ title: 'Разрешить уведомления:', info: 'да' }];

function createId() {
    return `id${Date.now() + '' + Math.random()}`
}

function printHours(hour) {
    if (hour === 1) {
        return `${hour} час`;
    } else if (hour < 5) {
        return `${hour} часа`;
    } else {
        return `${hour} часов`;
    }
};

function calcAverage(arr) {
    let count = 0;
    if (arr.length > 0) {
        const sum = arr.reduce(function(x, y) {
            if (y) {
                count++;
            }
            return x + Number(y);
        }, 0);
        return (sum / count).toFixed(2);
    } else {
        return 0;
    }
};

function convertTimeToMin(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

function getAverageTime(totalMinutes, numEntries) {
    if (numEntries === 0) {
        return 'не указано';
    }
    const averageMinutes = totalMinutes / numEntries;
    const averageHours = Math.floor(averageMinutes / 60);
    const averageMinutesRemainder = Math.round(averageMinutes % 60);
    return `${String(averageHours).padStart(2, '0')}:${String(averageMinutesRemainder).padStart(2, '0')}`;
};

function parseTimeToDate(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
}

function calculateBestWakeUpTimes(startTime, endTime) {
    const start = dayjs(startTime, 'HH:mm');
    const end = dayjs(endTime, 'HH:mm');

    if (end.isBefore(start)) {
        end.add(1, 'day');
    }

    const diffMinutes = end.diff(start, 'minute') - 15;

    const fullPhases = Math.floor(diffMinutes / 90);

    const firstWakeUpTime = start.add(15 + fullPhases * 90, 'minute').format('HH:mm');
    const secondWakeUpTime = start.add(15 + (fullPhases + 1) * 90, 'minute').format('HH:mm');

    return [firstWakeUpTime, secondWakeUpTime];
}

export { STATUSBAR_HEIGHT, NAME_OF_MONTHS, OPTIONS_LIST, SETTINGS, calculateBestWakeUpTimes, parseTimeToDate, calcAverage, getAverageTime, convertTimeToMin, humanizeListOfDays, createId, printHours, NAME_OF_DAY_OF_WEEK, PUZZLES };