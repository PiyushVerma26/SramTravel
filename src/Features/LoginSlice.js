import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
