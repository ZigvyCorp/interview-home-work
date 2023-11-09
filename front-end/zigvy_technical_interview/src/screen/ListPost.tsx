import { Fragment, useEffect } from "react";
import BlogCard from "../component/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/actions/postsActions";
import { RootState } from "../redux/store";

const ListPost = () => {
  const disPatch = useDispatch();

  const { loading, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    disPatch(fetchPostRequest());
    console.log(posts);
  }, []);

  return (
    <Fragment>
      {posts?.map((value, index) => (
        <div key={index}>
          <BlogCard
            content={value.body}
            title={value.title}
            postId={value.id}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default ListPost;
