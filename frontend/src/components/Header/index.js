import React from 'react';
import { Flex } from 'antd';
import HeaderSearch from './HeaderSearch';
import HeaderUser from './HeaderUser';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <Flex
            align='center'
            justify='space-between'
            style={{ padding: "20px 10px" }}
        >
            <HeaderLogo />
            <HeaderSearch />
            <HeaderUser />
        </Flex>
    );
};

export default Header;