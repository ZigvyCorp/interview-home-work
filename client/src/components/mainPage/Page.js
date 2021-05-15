import React, { useEffect } from 'react'
import {  Switch,Route } from 'react-router-dom';
import Post from './post/Post';
import NotFound from './utils/not_found/NotFound';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import * as postActions from '../../redux/actions/post';
import * as userActions from '../../redux/actions/users';
import * as CommentActions from '../../redux/actions/comment';
import DetailPost from './detailPost/DetailPost';

const { Content } = Layout;
function Page() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getPosts.getPostsRequest());
        dispatch(userActions.getUsers.getUsersRequest());
        dispatch(CommentActions.getComments.getCommentsRequest());
    
      }, [dispatch]);
    return (
        <Layout className="layout">
            <Content style={{ margin: '0 200px'}}>
                <Switch>
                    <Route path="/" exact component={ Post }/>
                    <Route path="/posts/:id" exact component={ DetailPost }/>
                    <Route path="*" exact component={ NotFound }/>
                </Switch>
            </Content>
        </Layout>

    )
}

export default Page
