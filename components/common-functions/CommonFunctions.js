

const calculateDaysDelta = (isLateForToday, currentDay, alarmDays) => {
    for (let day of alarmDays) {
        if (day === currentDay && !isLateForToday) return 0;
        if (day > currentDay) return day - currentDay;
    }
    if (currentDay == alarmDays[0]) return 7;
    return currentDay + alarmDays[0] - 1;
}

const isLateForToday = (currentHour, currentMinute, alarmHour, alarmMinute) => {
    let isHourEqual = currentHour === alarmHour;
    let isHourBigger = currentHour > alarmHour;
    if (isHourBigger || (isHourEqual && currentMinute >= alarmMinute)) return true;
    return false;
}

export const CalculateSecondsToRing = (time, alarmDays) => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours());
    const temp = new Date();
    const [alarmHour, alarmMinute] = time.split(":").map(num => Number(num));
    const isLate = isLateForToday(currentTime.getHours(), currentTime.getMinutes(), alarmHour, alarmMinute);
    let daysDelta = calculateDaysDelta(isLate, currentTime.getDay(), alarmDays);
    const nextTime = new Date(temp.setDate(temp.getDate() + daysDelta));
    nextTime.setHours(alarmHour, alarmMinute, 0, 0);
    return Math.ceil((nextTime - currentTime) / 1000);
}
