import { Col, Row, Space, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { Post } from '../types/models/post';
import Comment from './Comment';

const splitContent = (content: string) => {
  return content.length > 100 ? content.slice(0, 100) + '...' : content;
};

interface PostItem {
  post: Post;
}

export default function PostItem({ post }: PostItem) {
  return (
    <div className='mt-14 border-b-[3.5px] border-black'>
      <div className='px-5'>
        <Row justify='center'>
          <Link
            to={`/post/${post._id}`}
            className='mb-7 text-center font-mono bg-gradient-to-r from-red-200 to-red-100 bg-[length:0px_20px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_20px] hover:text-inherit font-bold text-5xl tracking-tighter'
          >
            {post.title}
          </Link>
        </Row>
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

        <p className='mt-5 text-2xl font-mono'>{splitContent(post.body)}</p>

        <div className='mt-10'>
          <Comment />
        </div>
      </div>
    </div>
  );
}
