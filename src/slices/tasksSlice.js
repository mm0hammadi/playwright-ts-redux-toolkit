import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    updateTask: tasksAdapter.updateOne,
    removeAllCompleted: tasksAdapter.removeMany,
  },
});

export const tasksSelector = tasksAdapter.getSelectors((state) => state.tasks);
export const selectCompletedTasks = (state) => tasksSelector
  .selectAll(state)
  .filter((task) => task.completed === true);
export const selectActiveTasks = (state) => tasksSelector
  .selectAll(state)
  .filter((task) => task.completed === false);

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
