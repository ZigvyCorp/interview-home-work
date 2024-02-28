import React from 'react';
import { Collapse, theme, Card, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Title } = Typography;

const PostItem = (props) => {
    const { token } = theme.useToken();
    const text = ` A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
                `;
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
        textAlign: 'left'
    };
    return (
        <Card
            hoverable
            style={{ width: "45%", textAlign: "center" }}
        >
            <Title level={3}>h1. Ant TItle</Title>
            <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                }}
                items={[
                    {
                        key: '1',
                        label: '2 replies',
                        children: <p>{text}</p>,
                        style: panelStyle,
                    }
                ]}
            />
        </Card>
    );
};



export default PostItem;