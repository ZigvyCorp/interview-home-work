import React from 'react'
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

function Menu({ items, children, ...props }) {
    return (
        <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            trigger={['click']}
            {...props}
    >
            {children}
        </Dropdown>
    )
}

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.element,
};

export default Menu
