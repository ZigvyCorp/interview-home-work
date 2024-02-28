import React from 'react';
import { Image as CCImage } from 'antd';
import PropTypes from 'prop-types';

const Image = ({ src, alt, preview = false, ...props }) => {
    return (
        <CCImage
            src={src}
            alt={alt}
            preview={preview}
            {...props}
        />
    )
};
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    preview: PropTypes.bool
};
export default Image;
