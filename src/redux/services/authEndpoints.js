export const authEndpoints = (builder) => ({
    login: builder.mutation({
        query: (credentials) => ({
            url: '/login',
            method: 'POST',
            body: credentials,
        }),
    }),
});