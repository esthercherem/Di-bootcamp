// redux/numberReducer.js

import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementNumber: (state) => {
      state.count += 1;
    },
    decrementNumber: (state) => {
      state.count -= 1;
    },
    incrementByAmountNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { incrementNumber, decrementNumber, incrementByAmountNumber } = numberSlice.actions;

export default numberSlice.reducer;