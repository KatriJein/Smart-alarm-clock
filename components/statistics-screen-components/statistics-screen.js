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
import { calcAverage, getAverageTime } from '../../const';
import { createDataForMonthChart, createDataForYearChart, createDataForWeekChart } from './data/convertData';

const defaultStateChart = {
  0: Array(7).fill(0),
  1: Array(31).fill(0),
  2: Array(12).fill(0)
};

export default function StatisticsScreen() {

  const periods = useRef(['За неделю', 'За месяц', 'За год']);
  const [textData, setTextData] = useState(dataObject);
  const [chartLabels, setChartLabels] = useState([]);
  const [sleepChartValues, setSleepChartValues] = useState([1]);
  const [sleepQualityChartValues, setSleepQualityChartValues] = useState([1]);

  const [currentPeriod, setCurrentPeriod] = useState(0);

  const [chartValues, setChartValues] = useState(defaultStateChart);

  const days = useSelector(state => state.calendar.dailyStats);
  const statistics = useSelector(state => state.statistics);

  useEffect(() => {
    setChartValues({
      0: createDataForWeekChart(days),
      1: createDataForMonthChart(days),
      2: createDataForYearChart(days)
    });
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
        data: chartValues[currentPeriod],
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
        data: sleepQualityChartValues,
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
    setSleepQualityChartValues(updateSleepQualityChartData(currentOptionIndex));
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
            <View style={statisticsScreenStyles.changed}>
              <View style={statisticsScreenStyles.periodSelect}>
                <RoundSelector options={periods.current} optionIndex={currentPeriod} onOptionPress={onPeriodPress} />
              </View>
              <View style={statisticsScreenStyles.sleepChart}>
                <LineChart data={sleepChartData} height={200} width={screenWidth} chartConfig={sleepHoursChartConfig} />
              </View>
              <View style={statisticsScreenStyles.containerText}>
                <Text style={statisticsScreenStyles.general}>Среднее кол-во часов сна: {calcAverage(chartValues[currentPeriod])}</Text>
              </View>
              <View style={statisticsScreenStyles.sleepQualityChart}>
                <LineChart data={sleepQualityChartData} height={200} width={screenWidth} chartConfig={sleepQualityChartConfig} />
              </View>
              <View style={statisticsScreenStyles.containerText}>
                <Text style={statisticsScreenStyles.general}>Лучший сон в: {textData.bestSleepingDay}</Text>
              </View>
              <View style={statisticsScreenStyles.containerText}>
                <Text style={statisticsScreenStyles.general}>Вы лучше спите, когда перед сном занимались: {textData.healthiestActivity}</Text>
              </View>
            </View>
            <View style={statisticsScreenStyles.containerText}>
              <Text style={statisticsScreenStyles.general}>Среднее время отхода ко сну: {getAverageTime(statistics.sumFallAsleepTime, statistics.countFallAsleepTime)}</Text>
            </View>
            <View style={statisticsScreenStyles.containerText}>
              <Text style={statisticsScreenStyles.general}>Среднее время пробуждения: {getAverageTime(statistics.sumWakeUpTime, statistics.countWakeUpTime)}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Gradient>
  );
}
