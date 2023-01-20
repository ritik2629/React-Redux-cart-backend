// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ecom-houy.onrender.com/' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "products",
    }),
  }),
})
export const { useGetAllProductQuery } = productAPI