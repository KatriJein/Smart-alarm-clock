import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarReducer.js';
import alarmReducer from './alarmReducer.js';
import statisticsReducer from './statisticsReducer.js';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    alarms: alarmReducer,
    statistics: statisticsReducer
  },
})
