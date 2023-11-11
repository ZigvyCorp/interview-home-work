import React from 'react';
import { Layout, Flex } from 'antd';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';

const Header = () => {
    const { Header } = Layout;

    return (
        <Header>
            <Flex justify='space-between' align='center'>
                <HeaderLogo />
                <HeaderSearch />
                <HeaderMenu />
            </Flex>
        </Header>
    );
};

export default Header;