import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isLoading: false,
  isFefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.token = action.payload.token;
        state.isLoading = false;
        //   console.log(action.payload);
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleReject)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.token = action.payload.token;
        state.isLoading = false;
        //   console.log(action.payload);
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleReject)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLogin = false;
        state.token = null;
        state.isLoading = false;
        //   console.log(action.payload);
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleReject)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isLoading = false;
        //   console.log(action.payload);
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleReject);
  },
});
export const authReducer = authSlise.reducer;
