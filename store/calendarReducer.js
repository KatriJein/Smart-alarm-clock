import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dailyStats: {}
};

export const calendarSlice = createSlice({
  name: 'calendar',
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
    addDate: (state, action) => {
      state.dailyStats = {
        ...state.dailyStats, 
        [action.payload.date]: action.payload.options
      }
      console.log(state);
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addDate } = calendarSlice.actions

export default calendarSlice.reducer