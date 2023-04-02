/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { nowShowing: 'all' };

const filterInfoSlice = createSlice({
  name: 'filterInfo',
  initialState,
  reducers: {
    showAll: (state) => {
      state.nowShowing = 'all';
    },
    showCompleted: (state) => {
      state.nowShowing = 'completed';
    },
    showActive: (state) => {
      state.nowShowing = 'active';
    },
  },
});

export const filterInfoSelector = (state) => state.filterInfo;

export const { actions } = filterInfoSlice;
export default filterInfoSlice.reducer;
