import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import useClassNames from '../../hooks/useClassName';
import styles from './CommentItem.module.css';
import images from '../../assets/images';

const CommentItem = ({ data, className: cusClassName }) => {
    // Utilize the useClassNames hook to manage CSS classes
    const cx = useClassNames(styles);

    // Get the list of users from the Redux store
    const listUsers = useSelector((state) => state.users.users);
    // Find the author based on userID
    const author = listUsers.find((u) => u.id === data.owner);

    function timeDifference(current = Date.now(), previous) {
        // Check if the provided timestamp is valid
        if (!isNaN(previous)) {
            const msPerMinute = 60 * 1000;
            const msPerHour = msPerMinute * 60;
            const msPerDay = msPerHour * 24;
            const msPerMonth = msPerDay * 30;
            const msPerYear = msPerDay * 365;

            // Calculate the time elapsed between the current time and the provided timestamp
            const elapsed = current - previous;

            if (elapsed < msPerMinute) {
                return Math.round(elapsed / 1000) + ' seconds ago';
            } else if (elapsed < msPerHour) {
                return Math.round(elapsed / msPerMinute) + ' minutes ago';
            } else if (elapsed < msPerDay) {
                return Math.round(elapsed / msPerHour) + ' hours ago';
            } else if (elapsed < msPerMonth) {
                return Math.round(elapsed / msPerDay) + ' days ago';
            } else if (elapsed < msPerYear) {
                return Math.round(elapsed / msPerMonth) + ' months ago';
            } else {
                return Math.round(elapsed / msPerYear) + ' years ago';
            }
        }

        // Return an empty if the provided timestamp is not a valid number
        return '';
    }

    return (
        <div className={cx('container', cusClassName)}>
            <img className={cx('avatar')} src={data?.avatar || images.avatar} alt={data?.name} />
            <div className={cx('info')}>
                <div className={cx('block-name')}>
                    <p className={cx('name')}>{author?.name || 'anonymous'}</p>
                    <div className={cx('createdAt')}>{timeDifference(Date.now(), data?.created_at)}</div>
                </div>
                <p className={cx('content')}>{data?.content}</p>
                <div contentEditable className={cx('reply')} placeholder="Reply to"></div>
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
};

export default CommentItem;
