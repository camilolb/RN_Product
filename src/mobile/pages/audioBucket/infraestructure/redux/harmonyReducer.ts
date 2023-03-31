import {createSlice} from '@reduxjs/toolkit';
import {harmonyInitialState} from './harmonyState';

const harmonySlice = createSlice({
  name: 'harmony',
  initialState: harmonyInitialState,
  reducers: {
    userToken: (state, action) => {
      const {payload} = action;
      state.userToken = payload;
    },
  },
});

export const {userToken} = harmonySlice.actions;
export default harmonySlice.reducer;
