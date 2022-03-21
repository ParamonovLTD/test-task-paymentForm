import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaymentRequest, IPaymentResponse } from '../types/payment';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL || 'http://localhost:5000/' }),
  tagTypes: ['Payment'],
  endpoints: (build) => ({
    createPayment: build.mutation<IPaymentResponse, IPaymentRequest>({
      query(body) {
        return {
          url: '/payment',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Payment', id: 'LIST' }],
    }),
  }),
})

export const { useCreatePaymentMutation } = paymentApi