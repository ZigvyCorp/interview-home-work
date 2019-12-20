import React from "react";

import { Row, Col } from 'antd';

class Home extends React.Component {
    componentDidMount()
    {
        document.title = "Trang chủ | Zigvy blog app"
    }
    render()
    {
        return (
            <div style={{marginTop: '50px'}}>
                <Row gutter={16}>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
                </Row>
            </div>
        );
    }
}

export default Home