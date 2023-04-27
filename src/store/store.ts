import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from '@/api/todos-api';
import todoReducer from '@/slices/todos/todoSlice';
import { logger } from './middleware/logger';

const rootReducer = combineReducers({ todo: todoReducer, [todosApi.reducerPath]: todosApi.reducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(todosApi.middleware)
    .concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

