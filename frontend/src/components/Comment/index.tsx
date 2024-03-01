import { saveLogin } from '@/redux/features/auth-slice';
import { useAppDispatch } from '@/redux/hook';
import userService from '@/services/userService';
import { IComment } from '@/types/comment';
import { IUser } from '@/types/user';
import { Avatar } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentStyled = styled.div`
  display: flex;
  gap: 30px;
`;

const CommentContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comment = ({ comment }: { comment: IComment }) => {
  const [owner, setOwner] = useState<IUser | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchOwner() {
      try {
        const data = await userService.getUser(comment.owner);

        setOwner(data);
      } catch (error) {
        if ((error as any).response.status === 401) {
          dispatch(saveLogin(null));
        }
      }
    }
    fetchOwner();
  }, [comment]);

  return (
    <CommentStyled>
      <Avatar
        style={{ backgroundColor: '#cddc39', verticalAlign: 'middle' }}
        size='large'
        gap={4}
      >
        {owner?.name}
      </Avatar>
      <CommentContentStyled>
        <h4>
          {owner?.name} -{' '}
          {moment(new Date(comment.createdAt)).startOf('second').fromNow()}
        </h4>
        <p>{comment.content}</p>
      </CommentContentStyled>
    </CommentStyled>
  );
};

export default Comment;
