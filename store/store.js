import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calendarReducer from './calendarReducer.js';
import alarmReducer from './alarmReducer.js';
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
import settingsReducer from './settingsReducer.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const reducer = combineReducers({
  calendar: calendarReducer,
  alarms: alarmReducer,
  settings: settingsReducer
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