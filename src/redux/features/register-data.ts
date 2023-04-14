import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface RegisterState {
  loggWith: 'email' | 'noHp' | null;
  account: string | null;
  fullName: string | null;
  userName: string | null;
  password: string | null;
}

const initialState: RegisterState = {
  loggWith: null,
  account: null,
  fullName: null,
  userName: null,
  password: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterState(
      state,
      action: PayloadAction<{
        loggWith: 'email' | 'noHp' | null;
        account: string;
        fullName: string;
        userName: string;
        password: string;
      }>
    ) {
      state.loggWith = action.payload.loggWith;
      state.account = action.payload.account;
      state.fullName = action.payload.fullName;
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
  },
});

export const { setRegisterState } = registerSlice.actions;
export const getRegisterState = (state: RootState) => state.register;
export default registerSlice.reducer;
