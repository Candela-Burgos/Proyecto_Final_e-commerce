import { createSlice } from '@reduxjs/toolkit';

const emptyAuthState = {
  jwt: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: emptyAuthState,
  reducers: {
    login: (state, { payload }) => payload,
    logout: () => emptyAuthState,
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
