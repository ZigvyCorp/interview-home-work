import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { toggleIsNewCommentList } from '../commentSlice';
import { findAllCommentsByPostID } from '../services/commentThunk';

const useComment = ({
    page,
    postID,
    isFetch,
}: // onOpenCommentSection,
{
    page: number;
    postID: number;
    isFetch: boolean;
    // onOpenCommentSection: (value: boolean) => void;
}) => {
    const { commentList, hasNextPage, isNewList } = useAppSelector((state) => state.comments);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isFetch) return;

        dispatch(toggleIsNewCommentList(page === 1 ? true : false));
        dispatch(findAllCommentsByPostID({ page, postID }));
    }, [page, dispatch, postID, isFetch]);

    return { commentList, hasNextPage, isNewList };
};

export default useComment;
