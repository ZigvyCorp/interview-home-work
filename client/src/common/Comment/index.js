import React from 'react';
import styles from './styles.module.css';

export default function Comment({
  author = '',
  time = 0,
  content = '',
  avatar = '',
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const date = new Date(time / 1000);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.avatarCtn}`}>
        <img
          src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="avatar"
          className={`${styles.avatar}`}
        />
      </div>
      <div className={`${styles.infoCtn}`}>
        <div className={`${styles.authorAndTime}`}>
          <div className={`${styles.author}`}>{author}</div>
          <div className={`${styles.time}`}>
            {date.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
        <div className={`${styles.content} lh-base`}>{content}</div>
        <div className={`${styles.reply}`}>Reply to</div>
      </div>
    </div>
  );
}
