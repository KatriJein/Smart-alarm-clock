import * as Notifications from "expo-notifications"
import { ActionContinueSound, ActionNone, ActionRing, ActionStop } from "../Constants";
import dayjs from "dayjs";

const calculateDaysDelta = (isLateForToday, currentDay, alarmDays) => {
    for (let day of alarmDays) {
        if (day === currentDay && !isLateForToday) return 0;
        if (day > currentDay) return day - currentDay;
    }
    if (currentDay == alarmDays[0]) return 7;
    return 6 - currentDay  + alarmDays[0] + 1;
}

export const isLateForToday = (currentHour, currentMinute, alarmHour, alarmMinute) => {
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

export const scheduleAlarm = async (title, description, seconds, songName, isVibration, volume, vibrationPattern=[3000,4000,3000,4000]) => {
    const res = await Notifications.scheduleNotificationAsync({
        content: {
            autoDismiss: false,
            sticky: true,
            title,
            body: description,
            data: {
                action: ActionRing,
                songName,
                isVibration,
                vibrationPattern,
                volume
            }
        },
        trigger: {
            seconds: 2
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

export const remindOfTracker = async (date) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: `${date}: Укажите данные о сне!`,
            data: {
                action: ActionNone
            }
        },
        trigger: {
            seconds: 5
        }
    })
}

export const postponeSound = async () => {
    const res = await Notifications.scheduleNotificationAsync({
        content: {
            title: "Прошло 10 секунд, я продолжаю петь :)",
            data: {
                action: ActionContinueSound
            }
        },
        trigger: {
            seconds: 10
        }
    });
    return res;
}

export const shuffle = (array) => {
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  export const buildDate = () => {
    let date = dayjs().format('YYYY-MM-DD');
    return date;
  }

  export const buildNewAlarmTime = (alarmTime, minutes) => {
    const [alarmHour, alarmMinute] = alarmTime.split(":").map(num => Number(num));
    const newMinutes = (alarmMinute + minutes) % 60;
    const hoursDelta = Math.floor((alarmMinute + minutes) / 60);
    const newHours = (alarmHour + hoursDelta) % 24;
    return `${newHours > 9 ? newHours : "0" + newHours}:${newMinutes > 9 ? newMinutes : "0" + newMinutes}`
  }