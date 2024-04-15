import { createSlice } from '@reduxjs/toolkit';
import { convertTimeToMin } from '../const';

const initialState = {
    sumWakeUpTime: 0,
    countWakeUpTime: 0,
    sumFallAsleepTime: 0,
    countFallAsleepTime: 0
    // bestSleepingDay: "",
    // healthiestActivity: ""
};

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        addWakeUpTime: (state, action) => {
            state.sumWakeUpTime = state.sumWakeUpTime + convertTimeToMin(action.payload);
            state.countWakeUpTime = state.countWakeUpTime + 1;
        },
        addFallAsleepTime: (state, action) => {
            state.sumFallAsleepTime = state.sumFallAsleepTime + convertTimeToMin(action.payload);
            state.countFallAsleepTime = state.countFallAsleepTime + 1;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addAverageHours, addWakeUpTime, addFallAsleepTime } = statisticsSlice.actions

export default statisticsSlice.reducer