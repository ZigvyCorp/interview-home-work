import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { IComment } from '@/types/comment'; // Assuming this import is correct
import Comment from '../Comment';
import commentService from '@/services/commentService';
import { IBlog } from '@/types/blog';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { saveLogin } from '@/redux/features/auth-slice';

const CommentContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const Comments = ({
  blog,
  comments,
  setComments,
}: {
  blog: IBlog;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}) => {
  const [newComment, setNewComment] = useState<string>('');
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (!newComment || !user || !blog) return;

    try {
      const comment = await commentService.createComment({
        post: blog._id,
        owner: user.id,
        content: newComment,
      });

      setComments([comment, ...comments]);
      setNewComment('');
    } catch (error) {
      if ((error as any).response.status === 401) {
        dispatch(saveLogin(null));
      }
    }
  };

  return (
    <div>
      <CommentContainer>
        <Input
          value={newComment}
          onChange={handleInputChange}
          placeholder='Enter your comment'
        />
        <Button type='primary' onClick={handleAddComment}>
          Add Comment
        </Button>
      </CommentContainer>
      <div>
        {comments.map((comment, idx) => (
          <Comment key={idx} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
