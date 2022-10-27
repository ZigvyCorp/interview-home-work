import React, {useEffect, useState} from "react";
import {Row, Col} from 'antd';
import TagItem from "../Tag";
import Comment from '../Comment';
import { Pagination, Input } from 'antd';
import { useNavigate  } from "react-router-dom";

import './styles.scss'

const BodyPost = (props) => {
    const { data, dataUser, dataComment, mode } = props;
    const [currentPosts, setCurrentPosts] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [totalPage, setTotalPage] = useState(0);
    const { Search } = Input;
    const navigate  = useNavigate();

    useEffect(() => {
        onChangePagination(1);
        setTotalPage(data.length);
    }, [data]);

    const onChangePagination = (value) => {
        const currentPag = value;
        const pageSiz = pageSize;
        const indexOfLastNews = currentPag * pageSiz;
        const indexOfFirstNews = indexOfLastNews - pageSiz;
        const currentPost = data.slice(indexOfFirstNews, indexOfLastNews);
        setCurrentPosts(currentPost);
    }

    const onSearchPost = (value) => {
        const result = data?.filter(item => item.title?.includes(value));
        setCurrentPosts(result);
        setTotalPage(result.length);
    }

    const auThorUser = (post) => {
        const user = dataUser?.filter(item => item?.id === post?.userId);
        return user[0]?.username;
    }

    const gotoDetailPost = (postId) => {
        navigate(`/${postId}`)
    }

    return (
        <>
            {
                mode !== 'detail' && (
                    <Search className="search-post" onSearch={onSearchPost} placeholder="Search post" enterButton />
                )
            }
            <div className="list-post">
            {
                currentPosts?.map(item=> (
                    <div key={item?.id} className='post'>
                        <Row className="title-posts" onClick={()=>gotoDetailPost(item?.id)}>{item?.title}</Row>
                        <Row className="infor-posts">
                            <Col span={16}>
                                <Row> Author: {auThorUser(item)} </Row>
                                <Row> Create at: Sep 20 2022</Row>
                            </Col>
                            <Col span={8}>
                                <TagItem />
                            </Col>
                        </Row>
                        <Row className="content-posts">
                            {item?.body?.slice(0, 100)}{item?.body?.length> 100? '...': ''}
                            <Comment dataComment={dataComment} itemPost={item} />
                        </Row>
                    </div>
                ))
            }
            {
                totalPage > pageSize && (
                    <div className="pagination-homepage">
                        <Pagination 
                            defaultCurrent={1} 
                            total={totalPage} 
                            showSizeChanger={false}
                            onChange={onChangePagination}
                        />
                    </div>
                )
            }
            </div>
        </>
    )
}

export default BodyPost;