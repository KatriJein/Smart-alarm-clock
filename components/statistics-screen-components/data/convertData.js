import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc);

const localeObject = {
    name: 'es',
    weekStart: 1,
    yearStart: 4,
}

dayjs.locale('ru-my-settings', localeObject);

function getMonday(date) {
    const date2 = dayjs(date).startOf('week');
    return dayjs(date2).utc(true).toDate();
}

function getSunday(date) {
    const date2 = dayjs(date).endOf('week');
    return dayjs(date2).utc(true).toDate();
}

function createArrayDates(start, end) {
    const dates = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
}

export { getMonday, getSunday, createArrayDates };