import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';
import { statisticsScreenStyles } from './styles/statistics-screen-styles';
import { useEffect, useRef, useState } from 'react';
import RoundSelector from '../common-components/round-selector';
import { dataObject, fillDataObject, updateLabels, updateSleepChartData, updateSleepQualityChartData, updateTextData } from './data/statistics-data-helper';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Gradient from '../Gradient';
import { useSelector } from 'react-redux';
import { calcAverage, getAverageTime, convertTimeToMin, printHours, getThreeMaxFactors, getThreeMinFactors } from '../../const';
import { createDataForMonthChart, createDataForYearChart, createDataForWeekChart } from './data/convertData';
import StatOption from './stat-option';
import { getMonday, getSunday, createArrayDates, createArrayData } from './data/convertData'

const defaultStateChart = {
  0: Array(7).fill(0),
  1: Array(31).fill(0),
  2: Array(12).fill(0)
};

const defaultStateValues = {
  timeToSleep: 0,
  counttimeToSleep: 0,
  timeToWake: 0,
  counttimeToWake: 0,
  bestSleep: 0,
  delayedAlarms: 0,
  timeTookToSleep: [],
  timeTookToWake: [],
  goodFactors: {},
  badFactors: {}
};

const defaultStatistics = {
  0: {
    timeToSleep: 0,
    counttimeToSleep: 0,
    timeToWake: 0,
    counttimeToWake: 0,
    bestSleep: 0,
    delayedAlarms: 0,
    timeTookToSleep: [],
    timeTookToWake: [],
    goodFactors: {},
    badFactors: {}
  },
  1: {
    timeToSleep: 0,
    counttimeToSleep: 0,
    timeToWake: 0,
    counttimeToWake: 0,
    bestSleep: 0,
    delayedAlarms: 0,
    timeTookToSleep: [],
    timeTookToWake: [],
    goodFactors: {},
    badFactors: {}
  },
  2: {
    timeToSleep: 0,
    counttimeToSleep: 0,
    timeToWake: 0,
    counttimeToWake: 0,
    bestSleep: 0,
    delayedAlarms: 0,
    timeTookToSleep: [],
    timeTookToWake: [],
    goodFactors: {},
    badFactors: {}
  }
};

export default function StatisticsScreen() {

  const periods = useRef(['За неделю', 'За месяц', 'За год']);
  const [textData, setTextData] = useState(dataObject);
  const [chartLabels, setChartLabels] = useState([]);
  // const [sleepChartValues, setSleepChartValues] = useState([1]);
  // const [sleepQualityChartValues, setSleepQualityChartValues] = useState([1]);

  const [currentPeriod, setCurrentPeriod] = useState(0);

  const [sleepChartValues, setSleepChartValues] = useState({ ...defaultStateChart });
  const [sleepQualityChartValues, setSleepQualityChartValues] = useState({ ...defaultStateChart });
  const [statistics, setStatistics] = useState({ ...defaultStatistics });


  const days = useSelector(state => state.calendar.dailyStats);
  // const statistics = useSelector(state => state.statistics);

  useEffect(() => {
    let tempSleepChartValues = { ...defaultStateChart };
    let tempStatistics = {
      0: {
        timeToSleep: 0,
        counttimeToSleep: 0,
        timeToWake: 0,
        counttimeToWake: 0,
        bestSleep: 0,
        delayedAlarms: 0,
        timeTookToSleep: [],
        timeTookToWake: [],
        goodFactors: {},
        badFactors: {}
      },
      1: {
        timeToSleep: 0,
        counttimeToSleep: 0,
        timeToWake: 0,
        counttimeToWake: 0,
        bestSleep: 0,
        delayedAlarms: 0,
        timeTookToSleep: [],
        timeTookToWake: [],
        goodFactors: {},
        badFactors: {}
      },
      2: {
        timeToSleep: 0,
        counttimeToSleep: 0,
        timeToWake: 0,
        counttimeToWake: 0,
        bestSleep: 0,
        delayedAlarms: 0,
        timeTookToSleep: [],
        timeTookToWake: [],
        goodFactors: {},
        badFactors: {}
      }
    };
    let tempQualityChartValues = { ...defaultStateChart };
    const today = new Date();

    function addAverageTime(option, value, index) {
      if (!!value) {
        tempStatistics[index][option] = +tempStatistics[index][option] + convertTimeToMin(value);
        tempStatistics[index][`count${option}`] = +tempStatistics[index][`count${option}`] + 1;
      }
    }

    function addOptionArray(option, value, index) {
      if (!!value) {
        tempStatistics[index][option].push(value);
      }
    };

    function addOptionNumber(option, value, index) {
      if (!!value) {
        tempStatistics[index][option] += value;
      }
    };

    function addFactors(option, value, index, quality) {
      if (value.length > 0) {
        value.forEach((item) => {
          if (item in tempStatistics[index][option]) {
            tempStatistics[index][option][item] += quality;
          } else {
            tempStatistics[index][option][item] = quality;
          }
        });
      }
    }

    function createArrayData(dates, index) {
      const dataSleep = [];
      const dataSleepQuality = [];
      dates.forEach(date => {
        const day = days[date];
        if (!!day) {

          if (!!day.hours) {
            dataSleep.push(+day.hours);
            if (+day.hours > tempStatistics[index].bestSleep) {
              tempStatistics[index].bestSleep = +day.hours;
            }
          } else {
            dataSleep.push(0);
          }

          if (!!day.quality) {
            dataSleepQuality.push(+day.quality);
            if (['7', '8', '9', '10'].includes(day.quality)) {
              addFactors('goodFactors', [...day.activity, ...day.businessDuringDay, ...day.drinks], index, Number(day.quality));
              // addOptionArray('goodFactors', day.activity, index);
              // addOptionArray('goodFactors', day.businessDuringDay, index);
              // addOptionArray('goodFactors', day.drinks, index);
            }
            if (['1', '2', '3', '4'].includes(day.quality)) {
              addFactors('badFactors', [...day.activity, ...day.businessDuringDay, ...day.drinks], index, Number(day.quality));
              // addOptionArray('badFactors', day.activity, index);
              // addOptionArray('badFactors', day.businessDuringDay, index);
              // addOptionArray('badFactors', day.drinks, index);
            }
          } else {
            dataSleepQuality.push(0);
          }

          addAverageTime('timeToSleep', day.timeToSleep, index);
          addAverageTime('timeToWake', day.timeToWake, index);
          addOptionArray('timeTookToSleep', +day.timeTookToSleep, index);
          addOptionArray('timeTookToWake', +day.timeTookToWake, index);
          addOptionNumber('delayedAlarms', +day.delayedAlarms, index);

        } else {
          dataSleep.push(0);
          dataSleepQuality.push(0);
        }
      });

      tempSleepChartValues = {
        ...tempSleepChartValues,
        [index]: dataSleep
      };
      tempQualityChartValues = {
        ...tempQualityChartValues,
        [index]: dataSleepQuality
      };
    }

    function createDataForWeekChart() {
      const startOfWeek = getMonday(today);
      const endOfWeek = getSunday(today);
      const dates = createArrayDates(startOfWeek, endOfWeek);
      createArrayData(dates, 0);
    };

    function createDataForMonthChart() {
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 2);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      const dates = createArrayDates(startOfMonth, endOfMonth);
      createArrayData(dates, 1);
    };

    function createDataForYearChart() {
      const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

      const dataSleep = [];
      const dataSleepQuality = [];
      for (const month of months) {
        const startOfMonth = new Date(today.getFullYear(), month - 1, 2);
        const endOfMonth = new Date(today.getFullYear(), month, 1);

        let sumHours = 0;
        let sumQuality = 0;
        for (let date = startOfMonth; date <= endOfMonth; date.setDate(date.getDate() + 1)) {
          const dateString = date.toISOString().split('T')[0];
          const day = days[dateString];
          if (!!day) {
            if (!!day.hours) {
              sumHours += Number(day.hours);
              if (+day.hours > tempStatistics[2].bestSleep) {
                tempStatistics[2].bestSleep = +day.hours;
              }
            }

            if (!!day.quality) {
              sumQuality += Number(day.quality);
              if (['7', '8', '9', '10'].includes(day.quality)) {
                addFactors('goodFactors', [...day.activity, ...day.businessDuringDay, ...day.drinks], 2, Number(day.quality));
                // addOptionArray('goodFactors', day.activity, 2);
                // addOptionArray('goodFactors', day.businessDuringDay, 2);
                // addOptionArray('goodFactors', day.drinks, 2);
              }
              if (['1', '2', '3', '4'].includes(day.quality)) {
                addFactors('badFactors', [...day.activity, ...day.businessDuringDay, ...day.drinks], 2, Number(day.quality));
                // addOptionArray('badFactors', day.activity, 2);
                // addOptionArray('badFactors', day.businessDuringDay, 2);
                // addOptionArray('badFactors', day.drinks, 2);
              }
            }

            addAverageTime('timeToSleep', day.timeToSleep, 2);
            addAverageTime('timeToWake', day.timeToWake, 2);
            addOptionArray('timeTookToSleep', +day.timeTookToSleep, 2);
            addOptionArray('timeTookToWake', +day.timeTookToWake, 2);
            addOptionNumber('delayedAlarms', +day.delayedAlarms, 2);
          }
        }

        dataSleep.push(sumHours);
        dataSleepQuality.push(sumQuality);
      }

      tempSleepChartValues = {
        ...tempSleepChartValues,
        [2]: dataSleep
      };
      tempQualityChartValues = {
        ...tempQualityChartValues,
        [2]: dataSleepQuality
      };
    };

    createDataForWeekChart();
    createDataForMonthChart();
    createDataForYearChart();

    setSleepChartValues(tempSleepChartValues);
    setSleepQualityChartValues(tempQualityChartValues);
    setStatistics(tempStatistics);
  }, [days]);

  const screenWidth = Dimensions.get("window").width;

  const sleepHoursChartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };

  const sleepQualityChartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
    }
  };

  const sleepChartData = {
    labels: chartLabels,
    datasets: [
      {
        data: sleepChartValues[currentPeriod],
        color: (opacity = 1) => `rgba(213, 88, 141, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Часы сна"], // optional
  };

  const sleepQualityChartData = {
    labels: chartLabels,
    datasets: [
      {
        data: sleepQualityChartValues[currentPeriod],
        color: (opacity = 1) => `rgba(213, 88, 141, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Качество сна (10-бальная шкала)"] // optional
  };

  const onPeriodPress = () => {
    let current = (currentPeriod + 1) % periods.current.length;
    setCurrentPeriod(current);
    updateStats(current);
  }

  const updateStats = (currentOptionIndex) => {
    setTextData(fillDataObject(currentOptionIndex));
    setChartLabels(updateLabels(currentOptionIndex));
    // setSleepChartValues(updateSleepChartData(currentOptionIndex));
    // setSleepQualityChartValues(updateSleepQualityChartData(currentOptionIndex));
  }

  useEffect(() => {
    updateStats(currentPeriod);
  }, [])

  return (
    <Gradient>
      <View style={commonStyles.container}>
        <View style={statisticsScreenStyles.header}>
          <Text style={statisticsScreenStyles.title}>Статистика</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={statisticsScreenStyles.scrollContainer}>
            <View style={statisticsScreenStyles.periodSelect}>
              <RoundSelector options={periods.current} optionIndex={currentPeriod} onOptionPress={onPeriodPress} />
            </View>
            <View style={statisticsScreenStyles.sleepChart}>
              <LineChart data={sleepChartData} height={200} width={screenWidth} chartConfig={sleepHoursChartConfig} />
            </View>
            <StatOption optionTitle={'Среднее кол-во часов сна'} optionDescription={calcAverage(sleepChartValues[currentPeriod])} />
            <StatOption optionTitle={'Среднее время отхода ко сну'} optionDescription={getAverageTime(statistics[currentPeriod].timeToSleep, statistics[currentPeriod].counttimeToSleep)} />
            <StatOption optionTitle={'Среднее время пробуждения'} optionDescription={getAverageTime(statistics[currentPeriod].timeToWake, statistics[currentPeriod].counttimeToWake)} />
            <StatOption optionTitle={'Лучшие показатели сна'} optionDescription={printHours(statistics[currentPeriod].bestSleep)} />
            <StatOption optionTitle={'Сколько будильников было отложено'} optionDescription={statistics[currentPeriod].delayedAlarms} />
            <StatOption optionTitle={'Среднее время, необходимое для того, чтобы уснуть'} optionDescription={`${calcAverage(statistics[currentPeriod].timeTookToSleep)} мин`} />
            <StatOption optionTitle={'Среднее время, необходимое для того, чтобы проснуться'} optionDescription={` ${calcAverage(statistics[currentPeriod].timeTookToWake)} мин`} />
            <View style={statisticsScreenStyles.sleepQualityChart}>
              <LineChart data={sleepQualityChartData} height={200} width={screenWidth} chartConfig={sleepQualityChartConfig} />
            </View>
            <StatOption optionTitle={'Среднее качество сна'} optionDescription={calcAverage(sleepQualityChartValues[currentPeriod])} />
            <StatOption optionTitle={'Факторы, способствующие хорошему сну'} optionDescription={getThreeMaxFactors(statistics[currentPeriod].goodFactors).map((item) => (<Text key={item}>{'\n'}{item}</Text>))} />
            <StatOption optionTitle={'Факторы, способствующие плохому сну'} optionDescription={getThreeMinFactors(statistics[currentPeriod].badFactors).map((item) => (<Text key={item}>{'\n'}{item}</Text>))} />
          </View>
        </ScrollView>
      </View>
    </Gradient>
  );
}
