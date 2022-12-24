import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      state.count++; //redux toolkit은 내부적으로 immer 패키지를 사용하고 있기 때문에 사용자가 불변성에 대해서 신경을 써야하는 수고로움을 덜어준다.
    },
    decrease(state) {
      state.count--;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
