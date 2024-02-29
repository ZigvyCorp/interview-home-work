import React, { useState } from 'react';
import styles from './styles.module.css';
import Tag from 'common/Tag';
import Comment from 'common/Comment';
import { tags } from 'util/js/constant';
import { useDispatch, useSelector } from 'react-redux';

export default function Post({
  title = '',
  author = '',
  timestamp = 0,
  content = '',
  id,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const date = new Date(timestamp / 1000);
  const cmts = useSelector((state) => state.comment.comment);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleExpand = () => {
    setExpand(!expand);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderTags = () => {
    return tags.map((tag, index) => {
      return (
        <Tag
          key={index}
          name={tag.name}
          color={tag.color}
          borderColor={tag.bdColor}
          bgColor={tag.bgColor}
        />
      );
    });
  };

  const renderComment = () => {
    var tmp = [];
    for (let i = 0; i < cmts.length; i++) {
      if (cmts[i].post_id === id) {
        tmp.push(
          <Comment
            key={i}
            author={cmts[i].author}
            time={cmts[i].created_at}
            content={cmts[i].content}
          />
        );
      }
    }
    return tmp;
  };
  
  const countComment = () => {
    var count = 0;
    for (let i = 0; i < cmts.length; i++) {
      if (cmts[i].post_id === id) {
        count++;
      }
    }
    return count;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div>
      <div className={`${styles.title}`}>{title}</div>
      <div className={`${styles.detailCtn}`}>
        <div className={`${styles.detail}`}>
          <p className={`${styles.info} mb-2`}>Author: {author}</p>
          <p className={`${styles.info}`}>
            Created at:{' '}
            {date.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className={`${styles.tag}`}>{renderTags()}</div>
      </div>
      <div className={`${styles.content}`}>{content}</div>
      <div className={`${styles.commentBtn}`} onClick={handleExpand}>
        <button onClick={() => setExpand(!expand)}>{countComment()} replies</button>
      </div>
      {expand && (
        <div className={`${styles.commentCtn}`}>{renderComment()}</div>
      )}
    </div>
  );
}
