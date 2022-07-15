import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/'
  }),
  endpoints: builder => ({
    getCountryByType: builder.query({
      query: type => `${type}/all`
    })
  })
});
export const { useLazyGetCountryByTypeQuery } = countryApi;
