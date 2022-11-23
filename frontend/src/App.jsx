import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import MainLayout from "./layouts";
import Post from "./components/Post";
import { useCallback, useEffect, useRef } from "react";
import { POST_FETCH, POST_FETCH_LOAD_MORE } from "./redux/types/postType";

function App() {
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: POST_FETCH });
  }, [dispatch]);
  const observer = useRef();

  const lastPostElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch({ type: POST_FETCH_LOAD_MORE });
        }
      });
      if (node) observer.current.observe(node);
    },
    [postState.loading, postState.hasLoadMore]
  );


  return (
    <MainLayout>


      {postState.listPosts.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: 60,
            color: "gray",
            fontWeight: 300,
          }}
        >
          There are currently no posts, please be the first
        </p>
      ) : null}
      {postState?.listPosts.map((value, index) => {
        if (postState.listPosts.length - 1 === index)
          return (
            <div key={value._id} ref={lastPostElement}>
              <Post
                content={value.content}
                title={value.title}
                created_at={value.createdAt}
                ownerName={value?.owner?.name}
                countReplies={value.countComment}
                tags={value.tags}
                comments={value.comments}
                postId={value._id}
              />
            </div>
          );
        else
          return (
            <div key={value._id}>
              <Post
                content={value.content}
                title={value.title}
                created_at={value.createdAt}
                ownerName={value?.owner?.name}
                countReplies={value.countComment}
                tags={value.tags}
                comments={value.comments}
                postId={value._id}
              />
            </div>
          );
      })}
    </MainLayout>
  );
}

export default App;
