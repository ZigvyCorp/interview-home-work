import { createAction } from '@reduxjs/toolkit';

export const GET_POSTS_FETCH = createAction<number | undefined>(
    'GET_POSTS_FETCH'
);
export const GET_COMMENTS_FETCH = createAction('GET_COMMENTS_FETCH');
export const GET_USERS_FETCH = createAction('GET_USERS_FETCH');
