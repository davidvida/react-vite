import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemProps, ItemPropsMongo } from "../types/todo-item";

const API_BASE_URL = 'https://todo-service-0qq0.onrender.com/api/v1/';
const TODO_PREFIX = 'todos';

export const todosApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAllTodos: builder.query<ItemPropsMongo[], string>({
      query: (searchParam) => ({
        url: TODO_PREFIX,
        method: 'GET',
        params: { search: searchParam }
      }),
      providesTags: [{ type: 'Todos', id: 'LIST' }]
    }),
    addTodo: builder.mutation<ItemPropsMongo, Partial<ItemProps>>({
      query: (body) => ({
        url: TODO_PREFIX,
        method: 'POST',
        body: {}
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }]

    }),
  })
});

export const { useGetAllTodosQuery, useAddTodoMutation } = todosApi;