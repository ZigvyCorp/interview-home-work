import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        // console.log(data);
      });
  }, []);
  const { postId } = useParams();
  const thisPost = posts.find((post) => post.id === postId);

  return (
    <div>
      <h1>Blog detail</h1>
      <h1>{thisPost.title}</h1>
      <p>Price: ${thisPost.body}</p>
    </div>
  );
};

export default PostDetail;
