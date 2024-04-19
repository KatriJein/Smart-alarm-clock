function createDataForWeekChart(dataObject) {
    const today = new Date();
    const startOfWeek = getMonday(today);
    const endOfWeek = getSunday(today);

    const dates = createArrayDates(startOfWeek, endOfWeek);
    const data = createArrayData(dataObject, dates);

    return data;
}

function getMonday(date) {
    const day = date.getDay();
    const diff = day !== 1 ? (day === 0 ? 6 : day - 1) : 0;
    return new Date(date.setDate(date.getDate() - diff));
}

function getSunday(date) {
    const day = date.getDay();
    const diff = day !== 0 ? 7 - day : 0;
    return new Date(date.setDate(date.getDate() + diff));
}

function createDataForMonthChart(dataObject) {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 2);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    const dates = createArrayDates(startOfMonth, endOfMonth);
    const data = createArrayData(dataObject, dates);

    return data;
}

function createArrayDates(start, end) {
    const dates = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
}

function createArrayData(dataObject, dates) {
    const data = [];
    dates.forEach(date => {
        if (!!dataObject[date]) {
            data.push(dataObject[date].hours);
        } else {
            data.push(0);
        }
    });

    return data;
}

function createDataForYearChart(dataObject) {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    const data = [];
    for (const month of months) {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), month - 1, 2);
        const endOfMonth = new Date(today.getFullYear(), month, 1);

        let sumHours = 0;
        for (let date = startOfMonth; date <= endOfMonth; date.setDate(date.getDate() + 1)) {
            const dateString = date.toISOString().split('T')[0];
            if (!!dataObject[dateString]) {
                sumHours += Number(dataObject[dateString].hours);
            }
        }

        data.push(sumHours);
    }

    return data;
}

export { createDataForWeekChart, createDataForMonthChart, createDataForYearChart };