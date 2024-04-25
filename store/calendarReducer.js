import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dailyStats: {}
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
      const current = state.dailyStats[action.payload.date];
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
      state.dailyStats = {
        ...state.dailyStats,
        [action.payload.date]: {
          ...state.dailyStats[action.payload.date],
          [action.payload.option]: action.payload.value
        }
      }
    }
  },
})

export const { addDate, addDelayedAlarm, addOption } = calendarSlice.actions

export default calendarSlice.reducer