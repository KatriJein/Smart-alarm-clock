import dayjs from "dayjs";

function getMonday(date) {
    // console.log(dayjs(date).startOf('week').day(2).toDate());
    // const day = date.getDay();
    // const diff = date.getDate() - day + (day == 0 ? -6 : 1);
    // return new Date(date.setDate(diff + 1));
    return dayjs(date).startOf('week').day(2).toDate();
}

function getSunday(date) {
    // const day = date.getDay();
    // const diff = day !== 0 ? 7 - day : 0;
    // return new Date(date.setDate(date.getDate() + diff));
    return dayjs(date).endOf('week').day(7).add(2, 'seconds').toDate();
}

function createArrayDates(start, end) {
    const dates = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
}

export { getMonday, getSunday, createArrayDates };