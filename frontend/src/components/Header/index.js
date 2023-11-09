import React from 'react';
import { Layout, Flex } from 'antd';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';

const headerStyle = {
    // backgroundColor: '#fff',
};

const Header = () => {
    const { Header } = Layout;

    return (
        <Header style={headerStyle}>
            <Flex justify='space-between'>
                <HeaderLogo />
                <HeaderSearch />
                <HeaderMenu />
            </Flex>
        </Header>
    );
};

export default Header;