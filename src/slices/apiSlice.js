import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ 
  baseUrl: 'https://backend-api-vveg.onrender.com' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});
