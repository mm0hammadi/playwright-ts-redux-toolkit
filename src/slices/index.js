import { configureStore } from '@reduxjs/toolkit';
import filterInfoSlice from './filterInfoSlice';
import tasksSlice from './tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    filterInfo: filterInfoSlice,
  },
});

export default store;
