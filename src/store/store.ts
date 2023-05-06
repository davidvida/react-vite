import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { todosApi } from '@/api/todos-api';
import todoReducer from '@/slices/todos/todoSlice';
import { logger } from './middleware/logger';

const rootReducer = combineReducers({ todo: todoReducer, [todosApi.reducerPath]: todosApi.reducer });

export const setupStore = (preloadedState: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
      .concat(todosApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
