import React from 'react';
import { Avatar as CCAvatar } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const UserAvatar = styled(Link)`
    display: flex;
    align-items: center;
`
const UserName = styled.div`
    margin-left: 5px;
`

const Avatar = ({ src, alt, size = 'large', userName = 'Unknown', id, ...props }) => {
    return (
        <UserAvatar to={`/user/detail/${id}`}>
            <CCAvatar
                size={size}
                src={src}
                alt={alt ? src : alt}
                {...props}
            />
            <UserName>
                {userName}
            </UserName>
        </UserAvatar>
    )
};

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    userName: PropTypes.string,
    id: PropTypes.number
}

export default Avatar;
