import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Space, Typography ,Collapse , List, Divider, Pagination, Tooltip  } from 'antd';
import { Comment } from '@ant-design/compatible';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import { getFormatData } from '../Redux/dataSlice';

const { Text,Title } = Typography;
const { Panel } = Collapse;

const Post = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  });
  const pageSize = 3;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, comments, users, searchData } = useSelector(
    (state) => state.persistedReducer
  );

  useEffect(() => {
    (data.length < posts.length) && posts && posts.map ((item) => {
      const postComment = comments.filter(
        (value) => {return value.postId === item.id}
      );

      const formatData = {
        id: item.id,
        title: item.title,
        body: item.body,
        user: {...users.filter(
          (value) => {return value.id === item.userId}
        )[0]},
        comment: postComment,
        day: dayjs(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
        .format('MMMM DD , YYYY'),
      }
      return setData(arr => [...arr, formatData]);
    })
  }, []);

  const searchPost = data.filter((val) => {
    if(searchData === "") {
        return val;
    } else if (val.title.toLowerCase().includes(searchData.toLocaleLowerCase())) {
        return val;
    }
  })

  useEffect(() => {
    setPage({
      totalPage: data.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize
    })
  }, [data]);

  const onChange = (key) => {
  };

  const handleChange = (page) => {
    setPage({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize
    });
  };

  const handleClick = (id) => {
    dispatch(getFormatData(data));
    navigate(`details/${id}`);
  }

  return (
    <div>{
      searchPost && searchPost.map((item, index) => {
        return (searchData === "") ? 
        (index >= page.minIndex) && (index < page.maxIndex) &&(
          <div key={item.id}>
            <Space style={{width: '100%', justifyContent: 'center'}}>
            <Tooltip title="Go to post details when click" color="blue">
              <Title level={2} onClick={() => handleClick(item.id)}>{item.title}</Title>
            </Tooltip>
            </Space>
            <Space direction="vertical" style={{width: '100%', justifyContent: 'center'}}>
              <Text strong type="danger">Author: {item.user.name}</Text>
              <Text>Created at: {item.day}</Text>
              <br />
              {
                item.body.length > 100 ? <Text>{item.body.substring(0,100)} ...</Text>
                : <Text>{item.body}</Text>
              }
              <br />
            </Space>
            <Collapse onChange={onChange} bordered="false" ghost>
              <Panel header={`${item.comment.length} replies`} key="1" showArrow="false">
                  <List
                  className="comment-list"
                  itemLayout="horizontal"
                  dataSource={item.comment}
                  renderItem={item => (
                    <li>
                      <Comment
                        style={ {backgroundColor: "#f5f5f5"}}
                        actions={["Reply to"]}
                        author={item.name}
                        avatar={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                        content={item.body}
                        datetime={[`${(Math.random()*20 + 1).toFixed()} day ago`]}
                      />
                    </li>
                  )}
                />
              </Panel>
            </Collapse>
            <Divider style={{ borderLeft: '1px solid red' }}/>
          </div>         
        ) :
        (
          <div key={item.id}>
            <Space style={{width: '100%', justifyContent: 'center'}}>
              <Title level={2}>{item.title}</Title>
            </Space>
            <Space direction="vertical" style={{width: '100%', justifyContent: 'center'}}>
              <Text strong type="danger">Author: {item.user.name}</Text>
              <Text>Created at: {item.day}</Text>
              <br />
              <Text>{item.body}</Text>
              <br />
            </Space>
            <Collapse onChange={onChange} bordered="false" ghost>
              <Panel header={`${item.comment.length} replies`} key="1" showArrow="false">
                  <List
                  className="comment-list"
                  itemLayout="horizontal"
                  dataSource={item.comment}
                  renderItem={item => (
                    <li>
                      <Comment
                        actions={item.actions}
                        author={item.name}
                        avatar={item.avatar}
                        content={item.body}
                        datetime={item.datetime}
                      />
                    </li>
                  )}
                />
              </Panel>
            </Collapse>
            <Divider style={{ borderLeft: '1px solid red' }}/>
          </div>         
        )        
      })
    }
      {(searchData === "") && <Space style={{width: '100%', justifyContent: 'center'}}>
        <Pagination
          pageSize={pageSize}
          current={page.current}
          total={data.length}
          onChange={handleChange}
          style={{ bottom: "0px" }}
        />
      </Space>}
    </div>
  )
}

export default Post