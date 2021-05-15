import { Spin } from 'antd';
import React from 'react';

const LoadingComponent = ({ inline, text }) => {
    return (
        <div
            className="d-flex justify-content-center align-items-center height-100"
        >
            <Spin size="large" tip={text || "Loading..."} />
        </div>
    );
};

export default LoadingComponent;