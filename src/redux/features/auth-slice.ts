import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { UserData } from 'interfaces/redux/user_data';
import { type RootState } from 'redux/store';

interface AuthState {
  userData: UserData | null;
}

const initialState: AuthState = {
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<{ userData: object }>) {
      state.userData = action.payload.userData as UserData;
    },
  },
});

export const { setUserData } = authSlice.actions;
export const getUserData = (state: RootState) => state.auth;
export default authSlice.reducer;
