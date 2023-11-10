import React from "react";
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { Col, Input } from "antd";
import { UserOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
    const { Search } = Input;
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6} style={{ paddingTop: 4}}>
                    <WrapperTextHeader>Logo</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search 
                        placeholder="Search title"
                        size="large"
                    />
                </Col>
                <Col span={6} style={{ paddingTop: 4}}>
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: '30px'}}/>
                        <div>
                            <WrapperTextHeaderSmall>Sign Up/Sign in</WrapperTextHeaderSmall>
                        </div>
                    </WrapperHeaderAccout>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent