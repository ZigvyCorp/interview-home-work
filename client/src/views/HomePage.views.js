import React from "react";

import { Button } from 'antd';
class Home extends React.Component {
    componentDidMount()
    {
        document.title = "Trang chủ | Zigvy blog app"
    }
    render()
    {
        return (
            <div style={{marginTop: '50px', textAlign: 'center'}}>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default Home