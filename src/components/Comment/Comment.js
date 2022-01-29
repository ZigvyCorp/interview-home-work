import React, { useState, useEffect } from 'react';
import { Comment, List } from "antd";
import axios from 'axios';


export default function CommentComponent(props) {
    const { id } = props;
    const [state, setstate] = useState({arrComment: []})
    

    const [open, setOpen] = useState(false);
    useEffect(() => {
        getCommentList()
        
    }, [])
    const getCommentList = () => {
        let promise = axios({
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            method: 'GET',
        })
        promise.then((rs) => {
           setstate({
               arrComment:rs.data,
           })
        })
        promise.catch((err) => {
            console.log(err);
        })
    }

    return (
        <List
            className="comment-list"
            header={<span onClick={() => {
                setOpen(!open)
            }}>{state.arrComment.length} replies</span>}
            itemLayout="horizontal"
            dataSource={state.arrComment}

            renderItem={item => (
                <>
                    {
                        open ? <li>
                            <Comment
                                actions={item.actions}
                                author={item.email.split('@')[0]}
                                avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                                content={item.body}
                                datetime={item.datetime}
                            /> </li> : ""
                    }
                </>
            )}
        />
    )
}
