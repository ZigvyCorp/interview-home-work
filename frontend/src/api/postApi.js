// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\api\postApi.js
import BASE_URL from '../config/apiConfig';

export const fetchPostsApi = async (page, limit, searchTerm) => {
    const response = await fetch(`${BASE_URL}/posts?page=${page}&limit=${limit}&search=${searchTerm}`);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch posts');
    }
    return await response.json();
};

export const fetchCommentsApi = async (postId) => {
    const response = await fetch(`${BASE_URL}/comments/post/${postId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch comments');
    }
    return await response.json();
};

export const createPostApi = async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create post');
    }

    return await response.json();
};

export const fetchPostDetailApi = async (postId) => {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post detail');
    }
    return await response.json();
};

export const addCommentApi = async (commentData) => {
    const response = await fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });

    if (!response.ok) {
        throw new Error('Failed to add comment');
    }

    return await response.json();
};