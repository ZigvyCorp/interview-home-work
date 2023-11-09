import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useClassNames from '../../hooks/useClassName';
import styles from './PostItem.module.css';
import CommentBlock from '../CommentBlock';
import { Link } from 'react-router-dom';

const PostItem = ({ item, className: cusClassName, short: isShortContent = false }) => {
    // Utilize the useClassNames hook to manage CSS classes
    const cx = useClassNames(styles);
    const [date, setDate] = useState('');
    const [content, setContent] = useState(item.content || '');

    // Get the list of users from the Redux store
    const listUsers = useSelector((state) => state.users.users);
    // Find the user associated with the post
    const user = listUsers.find((u) => u.id === item.owner);

    // Effect to format the date
    useEffect(() => {
        setDate(
            new Date(item?.created_at).toLocaleString('default', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
        );
    }, [item?.created_at]);

    // Effect to handle shortening the content if isShortContent is true
    useEffect(() => {
        if (isShortContent) {
            setContent(handleContent(content));
        }
    }, [isShortContent, content]);

    // Truncate content to maximum length
    function handleContent(content, maxLength = 100) {
        if (typeof content === 'string') {
            let truncated = content;
            if (truncated.length > maxLength) {
                truncated = truncated.substr(0, maxLength) + '...';
            }
            return truncated;
        }

        return content;
    }
    return (
        <div className={cx('post-item', cusClassName)}>
            <div className={cx('container')}>
                <Link to={`/post/${item.id}`}>
                    <h4 className={cx('title')}>{item?.title}</h4>
                </Link>
                <p className={cx('author')}>Author: {user?.name || user?.username}</p>
                <p className={cx('createAt')}>Create at: {`${date}`}</p>
                <p className={cx('content')}>{content}</p>
                <CommentBlock className={cx('comments-block')} idPost={item.id} />
            </div>
        </div>
    );
};

PostItem.propTypes = {
    item: PropTypes.object,
    className: PropTypes.string,
    short: PropTypes.bool,
};

export default PostItem;
