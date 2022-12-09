import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CommentDetail from './CommentDetail';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Comment({ thisComments }) {
  const onChange = (key) => {
    console.log(key);
  };
  const handleRenderCommentDetail = () => {
    return thisComments.map((comment, index) => {
      return <CommentDetail key={"index" + index} comment={comment} />;
    });
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header='Comments' key='1'>
        {handleRenderCommentDetail()}
      </Panel>
    </Collapse>
  );
}
