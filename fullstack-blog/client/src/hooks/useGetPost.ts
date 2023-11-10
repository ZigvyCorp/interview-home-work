import { getAllPosts, getPostById } from "@/redux/actions/post.action";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

function useGetAllPost(page: number, title: string) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllPosts({ page, title }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, title]);
}

function useGetPostById(id: string) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPostById(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
}

export { useGetAllPost, useGetPostById };
