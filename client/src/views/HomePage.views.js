import React from "react"

import { Row, Col, Card, Divider,Pagination, Skeleton, Icon, Avatar } from 'antd'

import {getPostsAPI} from '../services/api/post'

import {connect} from 'react-redux'

import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import {getPostsAction} from '../actions/post.action'

import PostsView from '../components/posts_view/posts_view'

const { Meta } = Card




class Home extends React.Component {

    render()
    {
        return (
                <Switch>
                    <Route exact
                        path='/home/view/:page'
                        component={PostsView}/>
                    <Redirect from='/home' to='/home/view/1' />
                </Switch>
        );
    }
}
export default withRouter(Home);