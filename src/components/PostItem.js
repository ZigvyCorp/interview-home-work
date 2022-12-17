import React from 'react';
import { useSelector } from 'react-redux';
import CommentList from './CommentList';
import { Tag } from 'antd';
import Moment from 'moment';
const tag = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

const PostItem = ({ data }) => {
    const own = useSelector(state => state.UserReducer.userList.find(f => f.id === data.owner));
    const name =  own?.name  || ''
    return (
        <>
            <div className='post-title'>
                <h3 className='text-center fs-1'>{data && data.title}</h3>
                <div className="post-info ms-4">
                    <div className='row'>
                        <div className='col-8'>
                            <p><span className='post-author fw-bold'>Author: </span>{name}</p>
                            <p><span className='post-created-date fw-bold'>Create at: </span>{Moment((new Date(data.created_at))).format("ll")}</p>
                        </div>
                        <div className='col-4'>
                            {data.tags.map((items, index) => {
                                return <Tag key={index} color={tag[index]}>{items}</Tag>
                            })}
                            <div>

                            </div>

                        </div>

                    </div>
                    <div className="post-desc">{data && data.content.substring(0, 100) + ' ...'}</div>
                    <a href={`/post/${data.id}`} className='col-2 btn-read-more'>Read more</a>
                    <CommentList postId={data.id} authorName={name}></CommentList>
                </div>


            </div>
        </>

    );
};

export default PostItem;