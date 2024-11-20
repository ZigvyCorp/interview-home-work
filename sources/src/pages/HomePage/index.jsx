import React, { useEffect } from 'react';
import './styles.scss'
import ThumbnailPost from './components/ThumbnailPost';
import listPostsJS from '../../data/posts.json';
import listCommentsJS from '../../data/comments.json';
import listUsersJS from '../../data/users.json';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import { loadListPosts } from '../../actions/posts';
import { loadListComments } from '../../actions/comments';
import { loadListUsers } from '../../actions/users';

function HomePage(props) {


    const listPosts = useSelector(state => state.listPosts.listPosts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadListPosts(listPostsJS));
        dispatch(loadListComments(listCommentsJS));
        dispatch(loadListUsers(listUsersJS));
    }, [])

    return (

        <div className="homepage">
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    pageSize: 5,
                    total: listPosts.length,
                }}
                dataSource={listPosts}
                renderItem={item => (
                    <List.Item className="item"
                        key={item.id}
                    >
                        <ThumbnailPost item={item} />
                    </List.Item>
                )}
            >
            </List>
        </div>
    );
}

export default HomePage;