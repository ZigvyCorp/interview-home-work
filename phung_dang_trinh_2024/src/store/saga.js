// import { all, call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';

// import { API } from "../data/api";

// const getAllPosts = async () => {
//     try {
//         const response = await fetch(API.POSTS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// const getAllComments = async () => {
//     try {
//         const response = await fetch(API.COMMENTS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// const getAllUsers = async () => {
//     try {
//         const response = await fetch(API.USERS, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         return false;
//     }
// };

// export const ShopService = {
//     getAllPosts,
//     getAllComments,
//     getAllUsers,
// }