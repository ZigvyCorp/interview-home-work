import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../apis/post";
import PostItem from "../components/PostItem";
import { isEmpty } from "lodash";
const PostDetail = () => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (params?.postId) {
        setIsLoading(true);
        const postRes = await fetchPostById(params?.postId);
        setPostData(postRes?.data);
        setIsLoading(false);
      }
    };

    loadPost();
  }, [params]);

  return (
    <Fragment>
      {loading && <p className="text-center">Loading...</p>}
      {!loading && !isEmpty(postData) && (
        <PostItem
          comments={postData?.comments}
          userName={postData?.user?.name}
          id={postData?.id}
          title={postData?.title}
          body={postData?.body}
          isDetail
        />
      )}
    </Fragment>
  );
};

export default PostDetail;
