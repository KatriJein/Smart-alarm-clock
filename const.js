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

const OPTIONS_LIST = [{
    title: 'Качество сна',
    options: ['крепкий', 'прерывистый', 'плохой']
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

const SETTINGS = [{ title: 'Почта:', info: 'example@gmail.com' },
{ title: 'Номер телефона:', info: '+7 922 999-99-99' },
{ title: 'Тема:', info: 'Кварц' },
{ title: 'Разрешить уведомления:', info: 'да' }];


export { STATUSBAR_HEIGHT, NAME_OF_MONTHS, OPTIONS_LIST, SETTINGS };