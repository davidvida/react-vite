import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from '../api/todos-api';
import todoReducer from '../slices/todos/todoSlice';
import { logger } from './middleware/logger';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(todosApi.middleware)
    .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
