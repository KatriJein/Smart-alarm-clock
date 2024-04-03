import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../common-styles';
import { LinearGradient } from 'expo-linear-gradient';
import { statisticsScreenStyles } from './styles/statistics-screen-styles';
import { useEffect, useRef, useState } from 'react';
import RoundSelector from '../common-components/round-selector';
import { dataObject, fillDataObject, updateLabels, updateSleepChartData, updateSleepQualityChartData, updateTextData } from './data/statistics-data-helper';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';


export default function StatisticsScreen() {

  const periods = useRef(['За неделю', 'За месяц', 'За год']);
  const [textData, setTextData] = useState(dataObject);
  const [chartLabels, setChartLabels] = useState([]);
  const [sleepChartValues, setSleepChartValues] = useState([1]);
  const [sleepQualityChartValues, setSleepQualityChartValues] = useState([1]);
  const [currentPeriod, setCurrentPeriod] = useState(0);

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
        data: sleepChartValues,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
    setSleepChartValues(updateSleepChartData(currentOptionIndex));
    setSleepQualityChartValues(updateSleepQualityChartData(currentOptionIndex));
  }

  useEffect(() => {
    updateStats(currentPeriod);
  }, [])

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <View style={commonStyles.container}>
        <ScrollView contentContainerStyle={statisticsScreenStyles.scrollContainerContent} style={statisticsScreenStyles.scrollContainer}>
          <Text style={statisticsScreenStyles.title}>Статистика</Text>
          <View style={statisticsScreenStyles.periodSelect}>
            <RoundSelector options={periods.current} optionIndex={currentPeriod} onOptionPress={onPeriodPress}/>
          </View>
          <View style={statisticsScreenStyles.sleepChart}>
            <LineChart data={sleepChartData} height={200} width={screenWidth} chartConfig={sleepHoursChartConfig}/>
          </View>
          <Text style={[statisticsScreenStyles.general, statisticsScreenStyles.statDescription]}>Среднее кол-во часов сна: {textData.averageSleepHour}</Text>
          <Text style={[statisticsScreenStyles.general, statisticsScreenStyles.statDescription]}>Среднее время отхода ко сну: {textData.averageFallAsleepTime}</Text>
          <Text style={[statisticsScreenStyles.general, statisticsScreenStyles.statDescription]}>Среднее время пробуждения: {textData.averageWakeUpTime}</Text>
          <View style={statisticsScreenStyles.sleepQualityChart}>
            <LineChart data={sleepQualityChartData} height={200} width={screenWidth} chartConfig={sleepQualityChartConfig}/>
          </View>
          <Text style={[statisticsScreenStyles.general, statisticsScreenStyles.statDescription]}>Лучший сон в: {textData.bestSleepingDay}</Text>
          <Text style={[statisticsScreenStyles.general, statisticsScreenStyles.statDescription]}>Вы лучше спите, когда перед сном занимались: {textData.healthiestActivity}</Text>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
