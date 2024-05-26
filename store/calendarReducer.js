import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dailyStats: {}
};

const dailyStatsState = {
  hours: null,
  quality: null,
  activity: [],
  businessDuringDay: [],
  drinks: [],
  timeToSleep: null,
  timeToWake: null,
  delayedAlarms: 0,
  timeTookToSleep: null,
  timeTookToWake: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.dailyStats = {
        ...state.dailyStats,
        [action.payload.date]: action.payload.options
      }
    },
    addDelayedAlarm: (state, action) => {
      let current = state.dailyStats[action.payload.date];
      if (current === undefined) current = {...dailyStatsState};
      state.dailyStats = {
        ...state.dailyStats,
        [action.payload.date]: {
          ...current,
          delayedAlarms: current.delayedAlarms + 1,
          timeTookToWake: current.timeTookToWake + action.payload.time
        }
      }
    },
    addOption: (state, action) => {
      let current = state.dailyStats[action.payload.date];
      if (current === undefined) current = {...dailyStatsState};
      state.dailyStats = {
        ...state.dailyStats,
        [action.payload.date]: {
          ...current,
          [action.payload.option]: action.payload.value
        }
      }
    }
  },
})

export const { addDate, addDelayedAlarm, addOption } = calendarSlice.actions

export default calendarSlice.reducer