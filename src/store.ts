import { configureStore } from '@reduxjs/toolkit'
import { optionsSlice } from './features/headerOptions';

const store = configureStore({
  reducer: {
    options: optionsSlice
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch