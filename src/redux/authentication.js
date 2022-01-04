import { createSlice } from '@reduxjs/toolkit';

const initialUser = {};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser,
  },
  reducers: {
    handleLogin: () => {},
    handleLogout: () => {},
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
