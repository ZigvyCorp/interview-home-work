import React from 'react';
import { Button as CCButton } from 'antd';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Image from 'src/components/Image/index.jsx';

const Button = styled(CCButton)`
    padding: 5px 8px;
    display: flex;
    align-items: center;

    p {
        margin: 0 0 0 5px;
    }
`


const ButtonImage = ({ title, alt, src, ...props }) => {
    return (
        <Button {...props}>
            <Image
                src={src}
                alt={alt}
            />
            <p>
                {title}
            </p>
        </Button>
    )
};

ButtonImage.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default ButtonImage;
