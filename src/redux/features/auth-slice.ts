import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from 'redux/store';

interface UserData {
  id: string;
}
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
    setUserData(state, action: PayloadAction<{ userData: UserData }>) {
      state.userData = action.payload.userData;
    },
  },
});

export const { setUserData } = authSlice.actions;
export const getUserData = (state: RootState) => state.auth.userData;
export default authSlice.reducer;
