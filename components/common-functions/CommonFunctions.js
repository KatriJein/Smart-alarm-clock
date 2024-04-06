import * as Notifications from "expo-notifications"
import { ActionRing, ActionStop } from "../Constants";

const calculateDaysDelta = (isLateForToday, currentDay, alarmDays) => {
    for (let day of alarmDays) {
        if (day === currentDay && !isLateForToday) return 0;
        if (day > currentDay) return day - currentDay;
    }
    if (currentDay == alarmDays[0]) return 7;
    return 6 - currentDay  + alarmDays[0] + 1;
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

export const scheduleAlarm = async (title, description, seconds) => {
    const res = await Notifications.scheduleNotificationAsync({
        content: {
            autoDismiss: false,
            sticky: true,
            title,
            body: description,
            data: {
                action: ActionRing
            }
        },
        trigger: {
            seconds
        }
    })
    return res;
}

export const stopAlarm = async () => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Будильник остановлен!",
            data: {
                action: ActionStop
            }
        },
        trigger: null
    })
}
