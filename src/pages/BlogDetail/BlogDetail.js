import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Header from '../../components/Header/Header';
import { List } from "antd";
import axios from 'axios';
import { GET_POST_DETAIL } from '../../redux/constants/BlogConstant';
import TagComponent from '../../components/TagComponent/TagComponent';
import CommentComponent from '../../components/Comment/Comment';


export default function BlogDetail(props) {
    const id = props.match.params.id;
    useEffect(() => {
        getPostDetail()
    }, [])
    const dispatch = useDispatch()
    const getPostDetail = () => {
        let promise = axios({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            method: 'GET',
        })
        promise.then((rs) => {
            dispatch({
                type: GET_POST_DETAIL,
                postDetail: rs.data
            })
        })
        promise.catch((err) => {
            console.log(err);
        })
    }
    const { postDetail } = useSelector(state => state.BlogReducer);
    const postDetailList = [];
    postDetailList.push(postDetail);

    const date = new Date().toDateString().substring(3);
    

    return (
        <div>
            <Header />

            <List
                itemLayout="vertical"
                size="large"
                dataSource={postDetailList}

                renderItem={item => (
                    <List.Item
                        key={`${item.title}`}
                    >
                        {<div className="blog">
                            <h1 className="blog__title">{item.title}</h1>
                            <div className="blog__top">
                                <div className="blog__top__author">
                                    <p>
                                        Author: <span>{`Jonh Smith ${item.userId}`}</span>
                                    </p>
                                    <p>
                                        Created at: <span>{date}</span>
                                    </p>
                                </div>
                                <div className="blog__top-flex"></div>
                                <div className="blog__top__tag">
                                    <TagComponent />
                                </div>
                            </div>
                            <div className="blog__content">
                                {item.body}
                            </div>
                            <div className="blog__bottom">
                                <CommentComponent id={item.id} />
                            </div>
                        </div>
                        }
                    </List.Item>
                )}
            />
        </div>
    )
}
