import { Card } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSummaryContent } from '../../../../utils/getSummaryContent';
const { Meta } = Card;
const PostSearchItem = ({ data }) => {
    return (
        <NavLink to={`/post/${data.id}`}>
            <Meta
                title={<p style={{ margin: 5, fontWeight: "bold", color: "gray" }}>{data?.title}</p>}
                description={getSummaryContent(data?.content)}
            ></Meta>

        </NavLink>
    );
};

export default PostSearchItem;