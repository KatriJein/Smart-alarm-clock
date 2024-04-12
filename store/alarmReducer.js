import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alarms: {
    test: {
      id: 'test',
      name: 'Утрений',
      time: '15:30',
      sound: 'nine',
      volume: 15,
      interval: 5,
      puzzle: 'math',
      description: 'Вставай на 1 пару',
      useVibration: true,
      neighbourOption: true,
      smartAlarm: false,
      timeToSleep: '',
      timeToWakeUp: '',
      days: [0, 2],
      notificationId: 5
    },
    test2: {
      id: 'test2',
      name: 'Утрений',
      time: '15:30',
      sound: 'none',
      volume: 15,
      interval: 5,
      puzzle: 'math',
      description: 'Вставай на 1 пару',
      useVibration: true,
      neighbourOption: true,
      smartAlarm: false,
      timeToSleep: '',
      timeToWakeUp: '',
      days: [0, 2],
      notificationId: 5
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
    // deleteAlarm: (state, action) => {

    // }
  },
})

// Action creators are generated for each case reducer function
export const { addAlarm } = alarmsSlice.actions

export default alarmsSlice.reducer