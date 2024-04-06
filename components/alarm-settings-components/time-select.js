
import { View, Text, PanResponder } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { timeSelectStyles } from './styles/time-select-styles'

export default function TimeSelect(props) {
    const {timeString, onChange} = props;

    const [previousHour, setPreviousHour] = useState();
    const [currentHour, setCurrentHour] = useState();
    const [nextHour, setNextHour] = useState();
    const [previousMinute, setPreviousMinute] = useState();
    const [currentMinute, setCurrentMinute] = useState();
    const [nextMinute, setNextMinute] = useState();
    const sensitivity = useRef(0.01);


    const parseTime = (time) => {
        return time >= 10 ? time : "0" + time;
    }

    const getNextHour = (hour) => {
        let value = (hour + 1) % 24;
        return parseTime(value);
    }

    const getNextMinute = (minute) => {
        let value = (minute + 1) % 60;
        return parseTime(value); 
    }

    const getPreviousHour = (hour) => {
        let value = (hour + 23) % 24;
        return parseTime(value);
    }

    const getPreviousMinute = (minute) => {
        let value = (minute + 59) % 60;
        return parseTime(value);
    }

    useEffect(() => {
        const [hour, minute] = timeString.split(":").map(part => Number(part));
        setCurrentHour(hour);
        setCurrentMinute(minute);
    }, []);

    useEffect(() => {
        setNextHour(getNextHour(currentHour));
        setNextMinute(getNextMinute(currentMinute));
        setPreviousHour(getPreviousHour(currentHour));
        setPreviousMinute(getPreviousMinute(currentMinute));
    }, [currentHour, currentMinute])


    const hourPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          const { dy } = gestureState;
          let hour;
          if (dy > sensitivity.current) {
            hour = Number(getPreviousHour(currentHour));
            setCurrentHour(prev => hour);
          } else if (dy < -sensitivity.current) {
            hour = Number(getNextHour(currentHour));
            setCurrentHour(prev => hour);
          }
          onChange(`${parseTime(currentHour)}:${parseTime(currentMinute)}`);
        //   setTime(`${currentHour}:${currentMinute}`);
        },
      });

      const minutePanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          const { dy } = gestureState;
          let hour;
          if (dy > sensitivity.current) {
            hour = Number(getPreviousMinute(currentMinute));
            setCurrentMinute(prev => hour);
          } else if (dy < -sensitivity.current) {
            hour = Number(getNextMinute(currentMinute));
            setCurrentMinute(prev => hour);
          } 
        //   setTime(`${currentHour}:${currentMinute}`);
          onChange(`${parseTime(currentHour)}:${parseTime(currentMinute)}`);
        },
      });

  return (
    <View style={timeSelectStyles.container}>
        <View style={timeSelectStyles.timeRow}>
            <View {...hourPanResponder.panHandlers}>
                <Text style={timeSelectStyles.otherTime}>{previousHour}</Text>
            </View>
            <Text> </Text>
            <View {...minutePanResponder.panHandlers}>
                <Text style={timeSelectStyles.otherTime}>{previousMinute}</Text>
            </View>
        </View>
        <View style={timeSelectStyles.timeRow}>
            <View {...hourPanResponder.panHandlers}>
                <Text style={timeSelectStyles.currentTime}>{currentHour >= 10 ? currentHour : "0" + currentHour}</Text>
            </View>
            <Text style={timeSelectStyles.currentTime}>:</Text>
            <View {...minutePanResponder.panHandlers}>
                <Text style={timeSelectStyles.currentTime}>{currentMinute >= 10 ? currentMinute : "0" + currentMinute}</Text>
            </View>
        </View>
        <View style={timeSelectStyles.timeRow}>
            <View {...hourPanResponder.panHandlers}>
                <Text style={timeSelectStyles.otherTime}>{nextHour}</Text>
            </View>
            <Text> </Text>
            <View {...minutePanResponder.panHandlers}>
                <Text style={timeSelectStyles.otherTime}>{nextMinute}</Text>
            </View>
        </View>
    </View>
  )
}