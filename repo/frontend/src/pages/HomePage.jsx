import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import moment from "moment";
import { debounce } from "lodash";
import { Card, Space, Collapse, Button, Pagination, Input, Image, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PostComment from "../components/comment/PostComment";
import { fetchPosts } from "../redux/actions/post.action";

const { Search } = Input;

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const posts = useSelector(( state ) => state.posts.posts);
    const totalItems = useSelector(( state ) => state.posts.totalItems);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ page, setPage ] = useState(1);
    const [ size, ] = useState(5);

    const handleSearch = ( e ) => {
        const onSearch = () => {
            setSearchTerm(e.target.value);
        };
        const debouncedSearch = debounce(onSearch, 1000);
        debouncedSearch();
    };

    useEffect(() => {
        dispatch(fetchPosts({ page, size, searchTerm }));
    }, [ page, size, searchTerm, dispatch]);

    if(!posts) return <Spin indicator={<LoadingOutlined spin />} fullscreen size="large" />

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <Image
                        width={50}
                        src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                    />
                    <span>My App</span>
                </div>
                <h4>Blogs</h4>
                <div className="user-data">
                    <Image
                        width={50}
                        src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                    />
                    <span>Adam Levine</span>
                </div>
            </div>
            <Space className="card-container" direction="vertical" size="middle">
                <Search className="card-search-bar" placeholder="input search text" size="large" onChange={handleSearch}/>
                {posts.map(( post ) => (
                    <div key={post.id}>
                        <Card
                            type="inner"
                            title={post.title} size="small">
                            <div className="card-content">
                                <div className="card-meta">
                                    <p>Author: {post.author.name}</p>
                                    <p>Created At: {moment(new Date(post.createdAt)).format('MMM DD, YYYY')}</p>
                                </div>
                                <p className="card-summary">
                                    {post.body.slice(0, 100)}
                                    <Button type="link" onClick={() => navigate(`post/${post.id}`)}>Read More</Button>
                                </p>
                            </div>
                            <Collapse
                                className="card-comment"
                                items={[ {
                                    key: '1',
                                    label: `${post.comments.length} comments`,
                                    children: <PostComment comments={post.comments}/>
                                } ]}>
                            </Collapse>
                        </Card>
                    </div>
                ))}
                <Pagination
                    align="center"
                    defaultCurrent={1}
                    total={totalItems}
                    onChange={( page ) => setPage(page)}
                />
            </Space>
        </div>
    );
}

export default HomePage;