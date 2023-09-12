import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './slices';

export const store = configureStore({
  reducer: {
    message: messageReducer
  },

})