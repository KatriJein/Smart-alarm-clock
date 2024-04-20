import { createSlice } from '@reduxjs/toolkit'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const initialState = {
  alarms: {
    test: {
      id: 'test',
      name: 'Утрений',
      time: '15:30',
      sound: 'Дождь',
      volume: 15,
      interval: 5,
      puzzle: 'Нет',
      isEnabled: false,
      description: 'Вставай на 1 пару',
      useVibration: true,
      neighbourOption: true,
      password: "pass0",
      puzzleAmount: 0,
      smartAlarm: false,
      timeToSleep: '',
      timeToWakeUp: '',
      days: [0, 2],
      notificationId: ""
    },
    test2: {
      id: 'test2',
      name: 'Утрений',
      time: '15:30',
      sound: 'Дождь',
      volume: 15,
      interval: 5,
      puzzle: 'Нет',
      isEnabled: false,
      description: 'Вставай на 1 пару',
      useVibration: true,
      neighbourOption: true,
      password: "pass1",
      puzzleAmount: 0,
      smartAlarm: false,
      timeToSleep: '',
      timeToWakeUp: '',
      days: [0, 2],
      notificationId: ""
    }
  }
};

export const alarmsSlice = createSlice({
  name: 'alarms',
  initialState,
  reducers: {
    addAlarm: (state, action) => {
      state.alarms = {
        ...state.alarms,
        [action.payload.id]: action.payload
      };
    },
    updateNotificationId: (state, action) => {
      const { alarmId, notificationId } = action.payload;
      state.alarms[alarmId].notificationId = notificationId;
    },
    switchAlarm: (state, action) => {
      const { alarmId, hasBeenEnabled } = action.payload;
      state.alarms[alarmId].isEnabled = hasBeenEnabled;
    },
    deleteAlarm: (state, action) => {
      const clone = {...state.alarms};
      delete clone[action.payload.id]; 
      state.alarms = clone;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAlarm, updateNotificationId, switchAlarm, deleteAlarm } = alarmsSlice.actions

export default alarmsSlice.reducer