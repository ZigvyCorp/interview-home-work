
import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux'

import {fetchComments, fetchPosts, fetchUsers} from '../../redux/action/index'
import {List} from 'antd';

import ItemBlog from './itemBlog'
import CountComment from './countComment'

export default function ListItem() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchComments());
        dispatch(fetchPosts());
    })

    const Posts = useSelector((state) => state.posts);
    
    return(
        <List 
            itemLayout='vertical'
            dataSource={Posts.data}
            pagination={{
                onChange: page => {
                  //console.log(page);
                },
                pageSize: 10,
                showSizeChanger: false
              }}
              
            renderItem={item => (
                <List.Item key={item.id}>
                    <ItemBlog item={item}/>
                    <CountComment id={item.id}/>
                </List.Item>
              )}
        />
    )
}