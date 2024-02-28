import { Types } from "./type.jsx"

export const loadPosts = (data) => {
    return {
        type: Types.loadPosts,
        payload: data
    }
}
// export const loadUsers = (data) => {
//     return {
//         type: Types.loadUsers,
//         payload: data
//     }
// }
// export const loadComments = (data) => {
//     return {
//         type: Types.loadComments,
//         payload: data
//     }
// }