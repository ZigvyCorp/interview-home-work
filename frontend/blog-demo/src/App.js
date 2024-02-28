import React from 'react';
import './index.css';
import moment from 'moment';
import { Comment } from '@ant-design/compatible';
import { Col, Divider, Image, List, Pagination, Row, Space, Tag, Tooltip, } from 'antd';
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];
const App: React.FC = () => (
  <div style={{flexDirection:'column',alignContent:'center'}}>
  <Row style={{flex:1,flexDirection:'row'}}>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}  >
    <div style={{height:50,width:50}}>
    <Image
    width={50} height={50} 
    src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gradient-on-gray-background-image_557021.jpg"
  />
    <h1 style={{height:0,width:10}}>Logo</h1>
    </div>
    
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{paddingTop:15,}}>
    
<h1>Blogs</h1>    </Col>
    <Col xs={2} sm={4} md={12} lg={8} xl={10} style={{paddingLeft:'500px'}}>
    <Image
    width={50} height={50} style={{paddingRight:5,}}
    src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration.jpg"
  />
      Adam Levin
    </Col>
  </Row>
  <h1 style={{alignItems:'center'}}>Post title 1</h1>
  <Row>
      <Col span={8}>Author</Col>
      <Col span={8} offset={8}>
    <Space size={[0, 'small']} wrap>
      <Tag bordered={false} color="processing">
        processing
      </Tag>
      <Tag bordered={false} color="success">
        success
      </Tag>
      <Tag bordered={false} color="error">
        error
      </Tag>
      <Tag bordered={false} color="warning">
        warning
      </Tag>
      <Tag bordered={false} color="magenta">
        magenta
      </Tag>
      <Tag bordered={false} color="red">
        red
      </Tag>
      <Tag bordered={false} color="volcano">
        volcano
      </Tag>
      <Tag bordered={false} color="orange">
        orange
      </Tag>
      <Tag bordered={false} color="gold">
        gold
      </Tag>
      <Tag bordered={false} color="lime">
        lime
      </Tag>
      <Tag bordered={false} color="green">
        green
      </Tag>
      <Tag bordered={false} color="cyan">
        cyan
      </Tag>
      <Tag bordered={false} color="blue">
        blue
      </Tag>
      <Tag bordered={false} color="geekblue">
        geekblue
      </Tag>
      <Tag bordered={false} color="purple">
        purple
      </Tag>
    </Space>
      </Col>
    </Row>
    <div>
    <p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
  upright and exclaimed, "Please have mercy on my soul!" upright and exclaimed, "Please have mercy on my soul!"
</p>

    </div>
    <List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
  <Pagination style={{alignItems:'center',paddingLeft:'600px'}} defaultCurrent={1} total={50} />
  </div>
);

export default App;