import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../api/postApi';
import { Post } from '../types/models/post';
import { Col, Divider, Row, Space, Tag } from 'antd';
import CommentItem from '../components/CommentItem';

export function Component() {
  const { id } = useParams<'id'>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (id) postAPI.getById(id).then((res) => setPost(res));
  }, []);

  return (
    <div className='px-5'>
      <h2 className='mt-14 mb-7 text-center font-mono  font-bold text-5xl tracking-tighter'>
        {post?.title}
      </h2>
      <Row gutter={12}>
        <Col span={16}>
          <p className='text-2xl font-mono'>Author: John Smith</p>
          <p className='text-2xl font-mono'>Created at: Sep 20, 2018</p>
        </Col>

        <Col span={8}>
          <Space size={[0, 8]} wrap>
            <Tag className='font-mono' color='magenta'>
              magenta
            </Tag>
            <Tag className='font-mono' color='red'>
              red
            </Tag>
            <Tag className='font-mono' color='volcano'>
              volcano
            </Tag>
            <Tag className='font-mono' color='orange'>
              orange
            </Tag>
            <Tag className='font-mono' color='gold'>
              gold
            </Tag>
            <Tag className='font-mono' color='lime'>
              lime
            </Tag>
            <Tag className='font-mono' color='green'>
              green
            </Tag>
            <Tag className='font-mono' color='cyan'>
              cyan
            </Tag>
            <Tag className='font-mono' color='blue'>
              blue
            </Tag>
            <Tag className='font-mono' color='geekblue'>
              geekblue
            </Tag>
            <Tag className='font-mono' color='purple'>
              purple
            </Tag>
          </Space>
        </Col>
      </Row>
      <p className='text-justify mt-5 text-2xl font-mono'>{post?.body}</p>

      <div>
        <p className='font-mono cursor-pointer tracking-tighter text-xl'>
          2 replies
        </p>
        <Divider />
        <div>
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'PostPage';
