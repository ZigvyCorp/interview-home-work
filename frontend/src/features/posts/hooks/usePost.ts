import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { findAllPosts, findPostByPostID } from '../services/postThunk';
import { useEffect } from 'react';
import { toggleIsNewPostList } from '../postSlice';

type PostHookParam = {
    page?: number;
    selectedID?: number;
};

const usePost = ({ page, selectedID }: PostHookParam) => {
    const { postList, postError, hasNextPage, postStatus, selectedPost } = useAppSelector(
        (state) => state.posts,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!page) return;

        dispatch(toggleIsNewPostList(page === 1 ? true : false));
        dispatch(findAllPosts(page));
    }, [dispatch, page]);

    useEffect(() => {
        if (!selectedID) return;

        dispatch(findPostByPostID(selectedID));
    }, [dispatch, selectedID]);

    return { postList, postError, hasNextPage, postStatus, selectedPost };
};

export default usePost;
