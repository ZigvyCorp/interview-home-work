import { useParams } from "react-router-dom";
import { Post } from "../../models/posts.model";
import { useState, useCallback, useEffect } from "react";
import { getPostById } from "../../services/api/posts.api";
import Container from "../../layouts/Container";
import PostCard from "../../components/PostCard";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [postData, setPostData] = useState<Post>();

  const fetchPostData = useCallback(async (id: string) => {
    try {
      const { data } = await getPostById(id);
      setPostData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchPostData(id);
    }
  }, [fetchPostData, id]);

  if (!postData) return null;

  return (
    <Container>
      <PostCard isEllipsis={false} {...postData} />
    </Container>
  );
};

export default PostDetail;
