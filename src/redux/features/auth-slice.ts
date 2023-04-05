import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface AuthState {
  userId: string | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  userId: null,
  token: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginUserSuccess(state, action: PayloadAction<{ userId: string; token: string }>) {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    loginUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerUserSuccess(state, action: PayloadAction<{ userId: string; token: string }>) {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    registerUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;

export const selectUserId = (state: RootState) => state.auth.userId;
export const selectToken = (state: RootState) => state.auth.token;

export const authReducer = authSlice.reducer;
