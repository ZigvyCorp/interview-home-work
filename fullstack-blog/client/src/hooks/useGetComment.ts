import { getAllCommentByPostId } from "@/redux/actions/comment.action";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

function useGetAllCommentByPostId(id: string, page: number) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCommentByPostId({ id, page }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, page]);
}

export { useGetAllCommentByPostId };
