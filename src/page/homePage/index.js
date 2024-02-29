import React, { useState } from 'react';
import styles from './styles.module.css';
import Tag from 'common/Tag';
import Comment from 'common/Comment';

export default function HomePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [expand, setExpand] = useState(false);
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
      <div className={`${styles.title}`}>Post title 1</div>
      <div className={`${styles.detailCtn}`}>
        <div className={`${styles.detail}`}>
          <p className={`${styles.info} mb-2`}>Author: John Smith</p>
          <p className={`${styles.info}`}>Created at: Sep 20, 2018</p>
        </div>
        <div className={`${styles.tag}`}>
          <Tag name="DAFDSFASDF" />
          <Tag name="DAFDSFASDF" />
          <Tag name="DAFDSFASDF" />
          <Tag name="DA" />
          <Tag name="DAF" />
          <Tag name="DAFD" />
          <Tag name="DAF" />
          <Tag name="DAFDS" />
          <Tag name="DAFDSFASDF" />
          <Tag name="DAFDSF" />
        </div>
      </div>
      <div className={`${styles.content}`}>
        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem
        LoremLorem Lorem LoremLorem 
      </div>
      <div
        className={`${styles.commentBtn}`}
        onClick={() => setExpand(!expand)}
      >
        <button onClick={() => setExpand(!expand)}>2 replies</button>
      </div>
      {expand && (
        <div className={`${styles.commentCtn}`}>
          <Comment
            author="John Smith"
            time="Sep 20, 2018"
            content="Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem"
          />
          <Comment
            author="John Smith"
            time="Sep 20, 2018"
            content="Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem"
          />
          <Comment
            author="John Smith"
            time="Sep 20, 2018"
            content="Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem Lorem Lorem lorem"
          />
        </div>
      )}
    </div>
  );
}
