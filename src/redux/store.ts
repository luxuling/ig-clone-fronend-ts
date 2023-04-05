import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth-slice';
import { registerReducer } from './features/register-data';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
