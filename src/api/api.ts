import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const Api = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});
