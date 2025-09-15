// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';

// export const store = configureStore({
//     reducer: todoReducer
// })

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer, // 👈 give a key for this slice
  },
  devTools: process.env.NODE_ENV !== 'production', // enable Redux DevTools
});
