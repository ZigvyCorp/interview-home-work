import React from 'react';
import { Collapse as CCCollapse } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CollapseStyled = styled(CCCollapse)`
    width: 100%;
    border: none;

    .ant-collapse-item {
        border-bottom: none;
    }

    .ant-collapse-header-text {
        text-align: center;
    }
`

const Collapse = ({ label, content, ...props }) => (
    <CollapseStyled
        items={[
            {
                key: '1',
                label: label,
                children: <>{content}</>
            },
        ]}
        {...props}
    />
);

Collapse.propTypes = {
    label: PropTypes.any,
    content: PropTypes.any,
};
export default Collapse;
