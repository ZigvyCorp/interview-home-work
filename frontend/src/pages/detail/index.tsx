import { useParams } from "react-router-dom";
import PostCard from "../../components/post-card";
import { useEffect, useState } from "react";
import { apiGetPost } from "../../apis";
import { Spin } from "antd";

const DetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  const fetchPost = async () => {
    if (id) {
      const response: any = await apiGetPost(id);
      if (response?.status === 200) {
        setPost(response?.data);
      }
    }
  };

  useEffect(() => {
    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div
      style={{
        padding: "0 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          margin: "auto",
          width: "100%",
          marginTop: "64px",
          maxWidth: "var(--max-width)",
        }}
      >
        {post ? <PostCard data={post} detail={true} /> : <Spin />}
      </div>
    </div>
  );
};

export default DetailPage;
