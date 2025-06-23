import React from 'react';
import { useGetPostsQuery } from '../redux/services/mainApi';

const PostList = () => {
    const { data, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posts</p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default PostList;