import React from 'react';
import { Space, Tag } from 'antd';
import { ITag } from 'redux/posts/interface';

interface ITagProps {
    tag: []
}

export function Tags({tag}: ITagProps) {
    return (
        <Space size={[0, 8]} wrap>
            <Tag color="magenta">{tag.at(0)}</Tag>
            <Tag color="red">{tag.at(1)}</Tag>
            <Tag color="volcano">{tag.at(2)}</Tag>
        </Space>
    )
};
