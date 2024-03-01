import { IBlog } from '@/types/blog';
import { Avatar } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse, Divider } from 'antd';
import { IUser } from '@/types/user';
import userService from '@/services/userService';
import { IComment } from '@/types/comment';
import commentService from '@/services/commentService';
import Comments from '../Comments';
import { useAppDispatch } from '@/redux/hook';
import { saveLogin } from '@/redux/features/auth-slice';
import Link from 'next/link';

const BlogStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-top: 2px solid black;
  padding-top: 20px;
  h1 {
    text-align: center;
    white-space: nowrap; /* Ngăn chặn việc ngắt dòng */
    overflow: hidden; /* Ẩn phần vượt quá khung */
    text-overflow: ellipsis;
  }
`;

const BlogLinkStyled = styled(Link)`
  color: black;
  text-decoration: none;

  transition: all 0.2s ease;

  &:hover {
    color: blue;
  }
`;

const BlogHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const BlogAvatarStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-weight: 700;
  }

  p {
    margin: 0px;
  }
`;

const BlogInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BlogBodyStyled = styled.p``;

const getRandomColor = () => {
  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Component styled cho thẻ tag
const Tag = styled.span`
  background-color: ${(props) => props.color};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
`;

// Component styled cho wrapper của các thẻ tag
const BlogTagStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Blog = ({ blog }: { blog: IBlog }) => {
  const [owner, setOwner] = useState<IUser | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchOwner() {
      try {
        const data = await userService.getUser(blog.owner);

        setOwner(data);
      } catch (error) {
        if ((error as any).response.status === 401) {
          dispatch(saveLogin(null));
        }
      }
    }

    async function fetchComments() {
      if (blog._id) {
        try {
          const data = await commentService.getCommentByBlog(blog._id);

          setComments(data);
        } catch (error) {
          if ((error as any).response.status === 401) {
            dispatch(saveLogin(null));
          }
        }
      }
    }

    fetchOwner();
    fetchComments();
  }, [blog]);

  return (
    <BlogStyled>
      <BlogLinkStyled href={`/${blog._id!}`}>
        <h1>{blog.title}</h1>
      </BlogLinkStyled>
      <BlogHeaderStyled>
        <BlogInfoStyled>
          <Avatar
            style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }}
            size='large'
            gap={4}
          >
            {owner?.name}
          </Avatar>
          <BlogAvatarStyled>
            <span>{owner?.username}</span>
            <p>Created At: {moment(blog.createdAt).format('ll')}</p>
          </BlogAvatarStyled>
        </BlogInfoStyled>
        <BlogTagStyled>
          {blog.tags &&
            blog.tags.map((tag, index) => (
              <Tag key={index} color={getRandomColor()}>
                {tag}
              </Tag>
            ))}
        </BlogTagStyled>
      </BlogHeaderStyled>
      <BlogBodyStyled>
        {blog.content.slice(0, 100)} {blog.content.length > 100 && '...'}
      </BlogBodyStyled>
      <Collapse
        items={[
          {
            key: '0',
            label: comments.length + ' Comments',
            children: (
              <Comments
                blog={blog}
                comments={comments}
                setComments={setComments}
              />
            ),
          },
        ]}
      />
    </BlogStyled>
  );
};

export default Blog;
