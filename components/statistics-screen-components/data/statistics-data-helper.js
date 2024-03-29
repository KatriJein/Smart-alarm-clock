
export const dataObject = {
    averageSleepHour: 0,
    averageFallAsleepTime: "",
    averageWakeUpTime: "",
    bestSleepingDay: "",
    healthiestActivity: ""
}

const weekData = [7.4, '10:18', '7:34', 'воскресенье', 'просмотр видео']
const monthData = [263, '23:18', '9:34', 'пятница', 'просмотр видео']
const yearData = [3263, '34:18', '9:36', 'воскресенье', 'работа/учёба']

const fillMonthSleepChartData = () => {
    const data = []
    for (let i = 0; i < 30; i++) {
        data.push(250 + Math.ceil(Math.random() * 20))
    }
    return data;
}

const fillMonthSleepQualityChartData = () => {
    const data = []
    for (let i = 0; i < 30; i++) {
        data.push(Math.ceil(Math.random() * 10))
    }
    return data;
}

const weekSleepChartData = [6, 7, 8, 8, 7, 6, 5]
const yearSleepChartData = [3240, 3250, 3235, 3249, 3252, 3268, 3270, 3254, 3256, 3267, 3265, 3261]
const monthSleepChartData = fillMonthSleepChartData();

const weekSleepQualityChartData = [5, 6, 9, 9, 6, 7, 3]
const yearSleepQualityChartData = [8, 9, 6, 7, 8, 10, 10, 6, 7, 8, 9, 8]
const monthSleepQualityChartData = fillMonthSleepQualityChartData();

const weekDayLabels = ['Пн', 'Вт', 'Cр', 'Чт', 'Пт', 'Сб', 'Вс']
const yearLabels = ['Янв', 'Март', 'Май', 'Июль', 'Сен', 'Ноя']
const monthLabels = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];



const chooseData = (index) => {
    switch (index) {
        case 0:
            return weekData;
            break;
        case 1:
            return monthData;
            break;
        case 2:
            return yearData;
            break;
    }
}

const chooseLabels = (index) => {
    switch (index) {
        case 0:
            return weekDayLabels;
            break;
        case 1:
            return monthLabels;
            break;
        case 2:
            return yearLabels;
            break;
    }
}

const chooseSleepChartData = (index) => {
    switch (index) {
        case 0:
            return weekSleepChartData;
            break;
        case 1:
            return monthSleepChartData;
            break;
        case 2:
            return yearSleepChartData;
            break;
    }
}

const chooseSleepQualityChartData = (index) => {
    switch (index) {
        case 0:
            return weekSleepQualityChartData;
            break;
        case 1:
            return monthSleepQualityChartData;
            break;
        case 2:
            return yearSleepQualityChartData;
            break;
    }
}

export const fillDataObject = (index) => {
    const data = chooseData(index);
    dataObject.averageSleepHour = data[0];
    dataObject.averageFallAsleepTime = data[1];
    dataObject.averageWakeUpTime = data[2];
    dataObject.bestSleepingDay = data[3];
    dataObject.healthiestActivity = data[4];
    return dataObject;
}

export const updateLabels = (index) => {
    return chooseLabels(index);
}

export const updateSleepChartData = (index) => {
    return chooseSleepChartData(index);
}

export const updateSleepQualityChartData = (index) => {
    return chooseSleepQualityChartData(index);
}