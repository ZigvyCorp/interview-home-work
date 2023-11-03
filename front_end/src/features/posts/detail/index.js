import { Space, Typography } from "antd";
import { useParams } from 'react-router-dom';
import { dispatch, useSelector } from "../../../app/store";
import { selectCurrentPost } from "../../../app/redux/posts/postsSlice";
import { FormatType, formatDate } from "../../../utils/datetime/formatDate";
import { selectUserById } from "../../../app/redux/users/usersSlice";
import { useEffect } from "react";
import { selectPostComments } from "../../../app/redux/comments/commentsSlice";
import Comment from "../Comment";

const { Title, Text, Paragraph } = Typography;

export default function PostDetail() {
  const { id } = useParams();

  const post = useSelector(selectCurrentPost);
  const comments = useSelector(selectPostComments(id));

  const { title, content, owner, createdAt } = post ?? {};

  const user = useSelector(selectUserById(owner));
  
  const fmtCreatedAt = createdAt ? formatDate(new Date(createdAt), FormatType.ago) : '';

  useEffect(() => {
    dispatch({ type: 'FETCH_POST', payload: { id } });
  }, [id]);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' });
    dispatch({ type: 'FETCH_COMMENTS' });
  }, []);

  return (
    <Space direction="vertical" size='large'>
      <Title style={{ textAlign: 'center' }}>{title}</Title>

      <Space direction="vertical">
        <Text>Author: {user?.name}</Text>
        <Text>Created at: {fmtCreatedAt}</Text>
      </Space>
      
      <Paragraph style={{ textAlign: 'justify' }}>{content}</Paragraph>
      
      <Space direction="vertical" size='middle'>
        <Text>Comments</Text>
        {comments?.map(comment => <Comment key={comment._id} comment={comment} />)}
      </Space>
    </Space>
  )
}
