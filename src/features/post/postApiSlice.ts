import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../lib/CustomAxios"
import { CommentResponseDTO, PostReqDTO, PostResponseDTO, UserResponseDTO } from "./resDto"

const postApi = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: "PostApi",
    tagTypes: ["POSTS"],
    endpoints(build) {

        return {

            getAllPost: build.query<PostResponseDTO[], void>({
                query: () => ({ url: '/posts', method: 'GET' }),
                transformResponse: (response: PostResponseDTO[]) => response
            }),
            getPostById: build.query<PostResponseDTO, string>({
                query: (id: string) => ({ url: `/posts/${id}`, method: 'GET' }),
            }),

            postPosts: build.mutation<PostResponseDTO, PostReqDTO>({
                query: (body: PostReqDTO) => ({
                    url: `/posts/${body.id}`, method: 'PUT', data: JSON.stringify({ ...body })
                }),
            }),

            deletePost: build.mutation<PostResponseDTO, string>({
                query: (id: string) => ({ url: `/posts/${id}`, method: 'DELETE' }),
            }),

            getAllUser: build.query<UserResponseDTO[], void>({
                query: () => ({ url: `/users`, method: 'GET' }),
                transformResponse: (response: UserResponseDTO[]) => response
            }),

            getCommentById: build.query({
                query: ({ id }: { id: string }) => ({ url: `/comments?postId=${id}`, method: 'GET' }),
                transformResponse: (response: CommentResponseDTO) => response
            }),
            getComments: build.query({
                query: ({ id }: { id: string }) => ({ url: `/posts/${id}/comments`, method: 'GET' }),
                transformResponse: (response: CommentResponseDTO[]) => response
            })
        }
    },

})

export default postApi
export const { useGetAllPostQuery, useGetAllUserQuery, useGetCommentByIdQuery, useGetCommentsQuery, useGetPostByIdQuery, usePostPostsMutation, useDeletePostMutation } = postApi