import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CommentBox from "../../Components/Comment/CommentBox";
import { getPostFetch } from "../../redux/actions/postAction";
import { getUserFetch } from "../../redux/actions/userAction";

function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state) => state.postReducer.posts);
  const currentPost = posts.find((item) => item.id === Number(id));
  const users = useSelector((state) => state.userReducer.users);
  const author = users.find((item) => item.id === Number(currentPost?.userId));
  const createdDate = randomDate(new Date(2012, 0, 1), new Date());

  useEffect(() => {
    dispatch(getPostFetch(posts));
    dispatch(getUserFetch(users));
  }, []);

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-capitalize">{currentPost?.title}</h1>
      <p className="mb-0">Author: {author?.name}</p>
      <p>Created date: {createdDate.toDateString()}</p>
      <div className="p-3">
        <img
          className="card-img-top pb-4"
          src="https://picsum.photos/1920/1080?random=1"
          alt="blog"
          loading="lazy"
        />
        <p>{currentPost?.body}</p>
      </div>

      <div className="container">
        <CommentBox postId={id} />
      </div>
    </div>
  );
}

export default DetailPage;
