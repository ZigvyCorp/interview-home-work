import React from 'react';
import { Layout, Flex } from 'antd';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    const { Header } = Layout;

    return (
        <Header>
            <Flex justify='space-between'>
                <HeaderLogo />
                <HeaderMenu />
            </Flex>
        </Header>
    );
};

export default Header;