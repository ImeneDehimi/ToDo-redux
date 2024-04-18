import { configureStore } from "@reduxjs/toolkit";
import todoslice from './slices/todo'

export const store = configureStore({
  reducer: {
    todo: todoslice
  },
});
