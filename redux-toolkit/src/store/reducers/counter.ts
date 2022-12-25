import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState,
  reducers: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
