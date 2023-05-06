import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import fetch from 'cross-fetch';

export const API_BASE_URL = process.env.API_BASE_URL;

export const Api = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL, fetchFn: fetch }), 
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});
