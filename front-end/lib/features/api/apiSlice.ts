import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadMorePost } from "../posts/postsSlice";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
	endpoints: (builder) => ({
		getPostBatch: builder.query({
			query: ({
				batchSize,
				offset = 0,
			}: {
				batchSize?: number;
				offset?: number;
			}) => {
				return `/posts${
					batchSize ? `?batchSize=${batchSize}&offset=${offset}` : ""
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
	}),
});

export const { useGetPostBatchQuery } = apiSlice;
