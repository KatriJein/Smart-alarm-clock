import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calendarReducer from './calendarReducer.js';
import alarmReducer from './alarmReducer.js';
import statisticsReducer from './statisticsReducer.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const reducer = combineReducers({
  calendar: calendarReducer,
  alarms: alarmReducer,
  statistics: statisticsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);