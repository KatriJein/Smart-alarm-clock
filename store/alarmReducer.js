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
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    addAlarm: (state, action) => {
      state.alarms = {
        ...state.alarms,
        [action.payload.id]: action.payload
      };
      // state.value += action.payload
    },
    updateNotificationId: (state, action) => {
      const { alarmId, notificationId } = action.payload;
      state.alarms[alarmId].notificationId = notificationId;
    },
    // deleteAlarm: (state, action) => {
    switchAlarm: (state, action) => {
      const { alarmId, hasBeenEnabled } = action.payload;
      state.alarms[alarmId].isEnabled = hasBeenEnabled;
    }
    // }
  },
})

// Action creators are generated for each case reducer function
export const { addAlarm, updateNotificationId, switchAlarm } = alarmsSlice.actions

export default alarmsSlice.reducer