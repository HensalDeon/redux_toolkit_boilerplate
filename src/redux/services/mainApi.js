import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authEndpoints } from './authEndpoints';
import { postEndpoints } from './postEndpoints';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        ...authEndpoints(builder),
        ...postEndpoints(builder),
    }),
});

export const {
    useLoginMutation,
    useGetPostsQuery,
} = mainApi;