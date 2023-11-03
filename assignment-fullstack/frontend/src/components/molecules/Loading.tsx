import React from 'react'
import { Space, Spin } from 'antd'

type LoadingProps = {
    children?: React.ReactNode
    text?: string
    size?: any
    loadingStyle?: object
}

const Loading: React.FC<LoadingProps> = ({
    children,
    size = 'small',
    loadingStyle,
}) => {
    return (
        <Space>
            <Spin size={size} style={loadingStyle}>
                {children}
            </Spin>
        </Space>
    )
}

export default Loading
