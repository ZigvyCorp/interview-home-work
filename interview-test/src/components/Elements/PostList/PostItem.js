import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getComments } from 'src/api/CommentApi';
import Comments from '../Comments';
import styles from './PostList.module.less';

export default function PostItem({ post }) {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(false);

  const fetchComments = async (postId) => {
    const resultApi = await getComments({ postId });
    setComments(resultApi.data);
  };

  useEffect(() => {
    if (visibleComments && !comments.length) {
      fetchComments(post.id);
    }
  }, [post, visibleComments, comments]);

  return (
    <div className={styles.postItem}>
      <h3 className={styles.title}>{post?.title}</h3>
      <p className={styles.createdAt}>Created at: Sep 20, 2018</p>
      <p className={styles.body}>{post?.body}</p>
      <span
        className={styles.showComment}
        onClick={() => {
          setVisibleComments(!visibleComments);
        }}
      >
        Comments
      </span>
      <span className={styles.goDetail} onClick={() => navigate(`/posts/${post?.id}`)}>
        Go to Detail
      </span>
      <Comments visible={visibleComments} data={comments} />
    </div>
  );
}
