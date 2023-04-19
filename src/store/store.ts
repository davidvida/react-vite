import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todosApi } from '../api/todos-api';
import todoReducer from '../slices/todos/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
