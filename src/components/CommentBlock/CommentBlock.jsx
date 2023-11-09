import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import useClassNames from '../../hooks/useClassName';
import styles from './CommentBlock.module.css';
import CommentItem from '../CommentItem';

const CommentBlock = ({ className: cusClassName, collapse = true, idPost }) => {
    // Utilize the useClassNames hook to manage CSS classes
    const cx = useClassNames(styles);
    const [isCollapse, setIsCollapse] = useState(collapse);

    // Get the list of comments from the Redux store
    const comments = useSelector((state) => state?.comments?.comments) || [];
    // Filter comments based on the post ID
    const commentsFiltered = comments.filter((cmt) => cmt.post === idPost) || [];

    // toggle collapse/expand
    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <div className={cx('cmtBlock', cusClassName)}>
            <p onClick={handleCollapse} className={cx('container')}>
                {commentsFiltered.length > 0 ? commentsFiltered.length : 0} replies
            </p>
            {commentsFiltered.length > 0 &&
                !isCollapse &&
                commentsFiltered.map((item) => (
                    <CommentItem key={item.id} data={item} className={cx('comment-item')} />
                ))}
        </div>
    );
};

CommentBlock.propTypes = {
    className: PropTypes.string,
    collapse: PropTypes.bool,
    postId: PropTypes.any,
};

export default CommentBlock;
