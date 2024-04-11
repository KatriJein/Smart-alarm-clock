import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

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
}

export { STATUSBAR_HEIGHT, NAME_OF_MONTHS, OPTIONS_LIST, SETTINGS, humanizeListOfDays, createId, printHours, NAME_OF_DAY_OF_WEEK, PUZZLES };