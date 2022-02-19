import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from 'src/api/postApi';

import Comments from 'src/components/Elements/Comments';
import styles from './DetailPage.module.less';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resultApi = await getPostById(parseInt(id));
      if (resultApi?.post?.status === 200 && resultApi?.comments?.status === 200) {
        setPost({
          author: resultApi?.author?.data,
          comments: resultApi?.comments?.data,
          post: resultApi?.post?.data,
        });
      } else {
        navigate('/404');
      }
    };
    fetchData();
  }, [id, navigate]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.postItem}>
        <h3 className={styles.title}>{post?.post?.title}</h3>
        <p className={styles.author}>author: {post?.author?.name}</p>
        <p className={styles.createdAt}>Created at: Sep 20, 2018</p>
        <p className={styles.body}>{post?.post?.body}</p>
        <Comments data={post.comments} />
      </div>
    </div>
  );
}
