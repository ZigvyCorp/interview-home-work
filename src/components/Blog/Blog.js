import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";
import axios from "axios";
import { GET_POST_LIST } from "../../redux/constants/BlogConstant";
import CommentComponent from "../Comment/Comment";
import { NavLink } from 'react-router-dom';
import SearchTitle from "../SearchTitle/SearchTitle";



export default function Blog(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        getPostList()
    }, [])
    const { arrPost } = useSelector(state => state.BlogReducer);
    const date = new Date().toDateString().substring(3);
    const getPostList = () => {
        let promise = axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
        })
        promise.then((rs) => {
            dispatch({
                type: GET_POST_LIST,
                arrPost: rs.data
            })
        })
        promise.catch((err) => {
            console.log(err);
        })
    }
   

    return (
        <div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <SearchTitle />
            </div>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        // console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={arrPost}

                renderItem={item => (
                    <List.Item
                        key={`${item.title}`}
                    >
                        {
                            <div className="blog">
                                <NavLink to={`/post/${item.id}`}>
                                    <h2 className="blog__title">{item.title}</h2>
                                </NavLink>
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
                                   
                                </div>
                                <div className="blog__content">
                                    {item.body.substring(0, 100)}
                                </div>
                                <div className="blog__bottom">
                                    <CommentComponent id={item.id} />
                                </div>
                            </div>
                        }
                    </List.Item>
                )}
            />
        </div >
    );
}
