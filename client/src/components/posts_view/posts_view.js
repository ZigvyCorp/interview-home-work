import React from "react";

import { Row, Col, Card, Divider,Pagination, Skeleton, Icon, Avatar, Collapse, Tag } from 'antd';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getPostsAction} from '../../actions/post.action'
import {userAction} from '../../actions/user.action'
import moment from 'moment'
import {history} from '../../helpers/history.helpers'
import ReactHtmlParser from 'react-html-parser';
import {find} from 'lodash';


const { Panel } = Collapse;


class Main extends React.Component {

    constructor(props)
    {
        super(props)
    }

    async loadPosts(page)
    {
        
        let {dispatch} = this.props
        await dispatch(getPostsAction.getInfoPosts(page))
        await dispatch(userAction.getUsers())
    }
    async onChangePage(page)
    {
        let {dispatch} = this.props
        dispatch(getPostsAction.resetInfo())
        dispatch(getPostsAction.getInfoPosts(page))
        history.push('/home/view/' + page)
    }
    load_author_name(value)
    {
        const {userReducer} = this.props.state
        let data = find(userReducer.users.data, {_id: value})
        return data.name + ' - ' + data.email

    }
    componentDidMount()
    {
        let {page} = this.props.match.params
        this.loadPosts(page)
        document.title = "Trang chủ | Zigvy blog app | page " + page
        
    }
    render()
    {
        const {postReducer, userReducer} = this.props.state
        //postReducer.posts.posts
        return (
            <div style={{marginTop: '50px'}}>
                {(!postReducer.loading && !userReducer.users.loadding) ?
                
                    (postReducer.posts.posts.length > 0) ? 
                    <>
                        {
                        postReducer.posts.posts.map((value, index) => {
                            return (
                                <Row key={index} gutter={[0, 32]}>
                                    <Col span={24}>
                                        <Card 
                                        title={
                                                value.title + ' - created at: ' + 
                                                moment(value.createAt).format('Do MMMM YYYY')
                                                + ' - author: ' +  this.load_author_name(value.owner)//userReducer.users.data[0].name
                                            } 
                                            bordered={false} loading={postReducer.loading} type="inner"
                                            >
                                            {value.summary} {/* ReactHtmlParser(value.content) */}
                                            <Divider />
                                            Tag : {value.tag.map((value, index) => {
                                                return (<Tag key={index} color={value}>{value}</Tag>)
                                            })}
                                            <Divider />
                                            <Collapse accordion bordered={false}>
                                                <Panel header="Comment" key="1" >
                                                <p>Comments goes here</p>
                                                </Panel>
                                            </Collapse>
                                        </Card>
                                    </Col>
                                </Row>
                            );
                                }) 
                        }

                            <Row gutter={[0, 32]}>
                                <Col span={24} style={{textAlign: 'center'}}>
                                <Pagination
                                    defaultCurrent={postReducer.posts.current}
                                    total={postReducer.posts.total}
                                    pageSize={2}
                                    onChange={this.onChangePage.bind(this)}
                                    />
                                </Col>
                            </Row>
                        </>
                    :
                    <Row gutter={[0, 32]}>
                        <Col span={24}>
                            <Card title="No item" bordered={false}>
                            </Card>
                        </Col>
                    </Row>                
                :
                <Row gutter={[0, 32]}>
                    <Col span={24}>
                        <Card title="..." bordered={false} loading={true}>
                        </Card>
                    </Col>
                </Row>            
            }  
            </div>
        );
    }
}

function mapStatetoProps(state)
{
    return {state}
}

export default withRouter(connect(mapStatetoProps)(Main));