import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// точка входа
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
