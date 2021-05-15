import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import {
    Button,
    Card,
    Table,
    Input,
    Space,
    Tooltip,
    BackTop
} from 'antd';
import { EyeOutlined } from '@ant-design/icons/'
import LoadingComponent from '../components/LoadingComponent'
import { useSelector, useDispatch } from "react-redux";
import actionTypes from '../actions/actionTypes';
import { debounce } from "lodash";
import queryString from "query-string";
import moment from "moment";

const { Search } = Input;
const Posts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { url } = useRouteMatch();
    let { search } = useLocation();
    const [searchValue, setSeachValue] = useState("");

    const { posts, loading } = useSelector((state) => state.postsReducer);

    useEffect(() => {
        const searchQuery = queryString.parse(search)
        if (searchQuery.title) {
            getPosts({ title: searchQuery.title })
            setSeachValue(searchQuery.title)
        } else {
            getPosts()
        }
    }, []);

    const getPosts = (payload) => {
        dispatch({
            type: actionTypes.GET_POSTS,
            payload,
        });

        if (payload) {
            history.push({
                pathname: url,
                search: queryString.stringify({
                    ...payload
                }),
            });
        } else {
            history.push(url);
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Content',
            dataIndex: 'body',
            key: 'body',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Created at',
            dataIndex: 'id',
            key: 'created_at',
            width: 150,
            render: (text, record) => (
                <span>{moment().format("DD/MM/YYYY HH:ss")}</span>
            )
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <Space size="middle">
                    <Link to={location => (
                        {
                            pathname: `/post/${record.id}`,
                            state: { search: location.search }
                        }
                    )}>
                        <Tooltip title="View">
                            <Button icon={<EyeOutlined />}></Button>
                        </Tooltip>
                    </Link>
                </Space>
            ),
        },
    ];

    const onSearch = debounce((char) => {
        if (char) {
            const payload = {
                title: char.trim()
            }
            getPosts(payload)
        } else {
            getPosts()
        }
        setSeachValue(char)
    }, 300);

    return (
        <div className="container posts-wrapper height-100">

            <div className="content-header mb-4 mt-4">
                <h4>List of posts</h4>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <Search
                        placeholder="Searching title..."
                        onChange={(e) => onSearch(e.target.value)}
                        style={{ width: 300 }}
                        allowClear
                        value={searchValue}
                    />
                </div>
            </div>
            <Card>
                {
                    loading
                        ? <LoadingComponent />
                        :
                        <>
                            <Table
                                dataSource={posts || []}
                                columns={columns}
                                pagination={{
                                    showSizeChanger: false
                                }}
                            />
                        </>
                }
            </Card>
            <BackTop visibilityHeight={200} />
        </div>
    );
};

export default Posts;