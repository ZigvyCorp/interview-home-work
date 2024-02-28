import React from 'react'
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import { mediaScreen } from 'src/theme/media.js';

const { Content: CCContent } = Layout;

const Content = styled(CCContent) `
    height: 100%;
    @media screen and (min-width: 320px ){
        width:90%;
        margin: auto;
    }
    @media screen and (min-width: 768px ){
        width: 70%;
    }
`

function Page({ children, ...props }) {
    return (
        <Content {...props}>
            {children}
        </Content>
    )
}

Page.propTypes = {
    children: PropTypes.any
};

export default Page
