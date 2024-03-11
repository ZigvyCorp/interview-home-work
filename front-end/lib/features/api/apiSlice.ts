import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadMorePost } from "../posts/postsSlice";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
	endpoints: (builder) => ({
		getPostBatch: builder.query({
			query: ({
				keyword,
				batchSize,
				offset = 0,
			}: {
				keyword?: string | null;
				batchSize?: number;
				offset?: number;
			}) => {
				return `/posts?${keyword ? `keyword=${keyword}&` : ""}${
					batchSize ? `batchSize=${batchSize}&offset=${offset}` : ""
				}`;
			},
			async onCacheEntryAdded(
				arg,
				{
					cacheDataLoaded,
					cacheEntryRemoved,
					updateCachedData,
					dispatch,
				}
			) {
				try {
					const { data } = await cacheDataLoaded;
					dispatch(loadMorePost(data.data));
				} catch {}
			},
		}),
		getUserDetails: builder.query({
			query: (userId: number) => `/users/${userId}`,
		}),
		getPostComments: builder.query({
			query: (postId: number) => `/posts/${postId}/comments`,
		}),
	}),
});

export const {
	useGetPostBatchQuery,
	useGetUserDetailsQuery,
	useGetPostCommentsQuery,
} = apiSlice;
