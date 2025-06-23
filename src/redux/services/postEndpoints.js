export const postEndpoints = (builder) => ({
    getPosts: builder.query({
        query: () => '/posts',
    }),
});