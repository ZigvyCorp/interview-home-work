/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Flex, theme } from 'antd';

import { getCommentByPostId } from "../services/comment.service.js";
import Comment from './Comment.jsx';



const CommentsCollapse = ({postId}) => {
  const [comments , setComments] = useState([])

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await getCommentByPostId(postId)
        setComments(response.data.comments)
      } catch (error) {
        console.log(error);
      }
    }
    fetchComment()
} , [postId])

const { token } = theme.useToken();
const panelStyle = {
  marginBottom: 24,
  background: token.colorFillAlter,
  borderRadius: token.borderRadiusLG,
  border: "none",
};

const renderComment = comments.map(comment => {
  return(
    <div key={comment._id}>
      <Comment comment={comment}/>
    </div>
  )
})

const getItems = (panelStyle) => [
    {
      key: "1",
      label: <span className="text-[gray] font-semibold">{`${comments.length} replies`} </span>,
      children: <>
      <Flex gap='30px' vertical>
        {renderComment}
      </Flex>
        ,
      </>,
      style: panelStyle,
    },
  ];

  return (
    <Collapse
    bordered={false}
    expandIcon={({ isActive }) => (
      <CaretRightOutlined rotate={isActive ? 90 : 0} />
    )}
    style={{
      background: token.colorBgContainer,
    }}
    items={getItems(panelStyle)}
  />
  )
}

export default CommentsCollapse
