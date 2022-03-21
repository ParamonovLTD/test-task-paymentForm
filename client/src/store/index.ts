import { configureStore } from '@reduxjs/toolkit';
import { paymentApi } from '../services/payment';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [paymentApi.reducerPath]: paymentApi.reducer,
  }
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch