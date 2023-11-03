import { Avatar, Col, Row } from 'antd';

export default function CommentItem() {
  return (
    <Row className='mb-10' wrap={false} gutter={20}>
      <Col flex='none'>
        <Avatar
          size='large'
          src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        />
      </Col>
      <Col flex='auto'>
        <p className='font-mono text-base text-neutral-400'>
          Han solo <>&nbsp;</> <span className='text-neutral-300'>a day ago</span>
        </p>
        <p className='text-neutral-500 font-mono mt-1 text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          similique cupiditate ut dolor! Alias necessitatibus iste rerum quod!
          Reprehenderit, facilis aliquid magni incidunt atque obcaecati sequi
          dolor praesentium dignissimos officia.
        </p>
        <button className='font-mono mt-4 text-neutral-400'>Reply to</button>
      </Col>
    </Row>
  );
}
