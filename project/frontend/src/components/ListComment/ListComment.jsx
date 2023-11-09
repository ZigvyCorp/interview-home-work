import { Comment, List, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import React, { useState } from 'react';
const { Panel } = Collapse;
const data = [
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title="2016-11-22 11:22:33">
                <span>8 hours ago</span>
            </Tooltip>
        ),
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title="2016-11-22 10:22:33">
                <span>9 hours ago</span>
            </Tooltip>
        ),
    },
];
const ListComment = () => {
    const [expanded, setExpanded] = useState(false);
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Collapse defaultActiveKey={['0']} onChange={onChange} ghost>
            <Panel header="2 replies" key="1" showArrow={false} className="">
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <li>
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </Panel>
        </Collapse>
    );
};

export default ListComment;
