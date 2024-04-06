import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './calendarReducer.js'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
})