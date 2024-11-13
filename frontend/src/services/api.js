const API_BASE_URL = 'http://localhost:4000'; // Replace with your actual backend URL

// Comments API
export const fetchComments = async () => {
    const response = await fetch(`${API_BASE_URL}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
};

export const fetchCommentsByPostId = async (postId) => {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments for this post');
    return response.json();
};

export const createComment = async (commentData) => {
    const response = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });
    if (!response.ok) throw new Error('Failed to create comment');
    return response.json();
};

export const updateComment = async (id, commentData) => {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });
    if (!response.ok) throw new Error('Failed to update comment');
    return response.json();
};

export const deleteComment = async (id) => {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete comment');
    return response.json();
};

// Posts API
export const fetchPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
};

export const fetchPost = async (id) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) throw new Error('Failed to fetch post');
    return response.json();
};

export const createPost = async (postData) => {
    const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
};

export const updatePost = async (id, postData) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Failed to update post');
    return response.json();
};

export const deletePost = async (id) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete post');
    return response.json();
};

// Users API
export const fetchUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
};

export const fetchUser = async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
};

export const updateUser = async (id, userData) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete user');
    return response.json();
};
