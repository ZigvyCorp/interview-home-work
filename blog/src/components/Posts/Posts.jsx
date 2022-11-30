import { Col, Input, Pagination, Row, Space } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import Post from "../Post/Post";
import "./Posts.scss";

const { Search } = Input;

let pageSize = 10;

const Posts = ({ postList }) => {
    const [pagination, setPagination] = useState({
        data: [],
        totalPage: 0,
        current: 1,
        minIndex: 0,
        maxIndex: pageSize,
    });
    const [dataSearch, setDataSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleSearch = (e) => {
        const data = postList.filter((item) =>
            item.title.includes(e.target.value)
        );
        setDataSearch([...data]);
    };
    const handleChangePage = (page, size) => {
        pageSize = size;
        setPagination({
            ...pagination,
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize,
        });
    };
    useEffect(() => {
        setPagination({
            ...pagination,
            data: postList,
            totalPage: postList?.length / pageSize,
            maxIndex: pageSize,
        });
    }, [postList]);

    useEffect(() => {
        if (dataSearch.length) {
            const debound = setTimeout(() => {
                setPagination({
                    ...pagination,
                    data: dataSearch,
                    totalPage: dataSearch.length / pageSize,
                });
            }, 1000);
            return () => {
                clearTimeout(debound);
            };
        }
    }, [dataSearch]);

    return (
        <div className="posts">
            <Space direction="vertical">
                <Row>
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Search
                            placeholder="input search title"
                            style={{ maxWidth: 600 }}
                            onChange={handleSearch}
                        />
                    </Col>
                </Row>
                {pagination?.data?.map(
                    (post, index) =>
                        index >= pagination.minIndex &&
                        index < pagination.maxIndex && (
                            <Post
                                key={post.id}
                                body={post.body}
                                id={post.id}
                                userId={post.userId}
                                title={post.title}
                            />
                        )
                )}
                <Row>
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Pagination
                            total={pagination?.data?.length}
                            current={pagination?.current}
                            pageSize={pageSize}
                            onChange={handleChangePage}
                            pageSizeOptions={["10", "20", "50", "100"]}
                        />
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default Posts;
