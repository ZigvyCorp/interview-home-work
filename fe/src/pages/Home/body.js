import className from "classnames/bind";
import style from "./Home.module.scss";
import { useEffect, useMemo, useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import DividePage from "../../components/dividePage";
import Search from "../../components/search";
import { setPost } from "../../stores/post.store";

const cx = className.bind(style);
function Body() {
  const dispatch = useDispatch();
  const colorList = [
    { name: "magenta" },
    { name: "red" },
    { name: "volcano", color: "#4e2728" },
    { name: "orange" },
    { name: "gold" },
    { name: "lime" },
    { name: "green" },
    { name: "cyan" },
    { name: "blue" },
    { name: "geekblue", color: "#1269C7" },
    { name: "purple" },
  ];
  let [state, setState] = useState({
    users: null,
    posts: null,
    postsDivided: null,
    comments: null,
    searchValue: "",
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        json.map((item) => (item.collapsed = true));
        setState((prev) => ({ ...prev, posts: json, postsDivided: json }));
        dispatch(setPost(json));
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => ({ ...prev, users: json }));
      });
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => ({ ...prev, comments: json }));
      });
  }, []);

  const collapseComment = (index) => {
    try {
      setState((prev) => {
        let posts = prev.posts;
        posts[index].collapsed = false;
        return { ...prev, posts: posts };
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (value) => {
    setState((prev) => ({ ...prev, searchValue: value }));
  };

  const filterPost = useMemo(() => {
    return state.posts?.filter((post) =>
      post.title.includes(state.searchValue)
    );
  }, [state.searchValue, state.posts]);

  const getComment = useMemo(
    () => (postId) => {
      let count = state.comments?.filter(
        (comment) => comment.postId === postId
      );
      return count;
    },
    [state.comments]
  );

  return (
    <div>
      <Search sendValue={handleSearch} />
      {state.users &&
        state.posts &&
        state.comments &&
        state.postsDivided.map((post, index) => (
          <div>
            <h1>{post.title}</h1>
            <div className={cx("body-heading")}>
              <div className="text-start">
                <h5>author : {state.users[post.userId - 1].name}</h5>
                <h5>created at : jan 20 2024</h5>
              </div>
              <div className={cx("body-heading-color-container")}>
                {colorList.map((item) => (
                  <div
                    style={{
                      color: item.color ? item.color : item.name,
                      border: `1px solid ${
                        item.color ? item.color : item.name
                      }`,
                      borderRadius: "4px",
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("body-content")}>
              <h5>{post.body.slice(0, 100)}</h5>
            </div>

            <div>
              <div>
                <div className={cx("card-comment", "w-100")}>
                  <span
                    className={cx("card-comment-count")}
                    onClick={() => collapseComment(index)}
                  >
                    {getComment(post.id).length} replies
                  </span>
                  {post.collapsed === false && (
                    <div>
                      <hr></hr>
                      {getComment(post.id).map((comment) => (
                        <div className="d-flex">
                          <div>
                            <img
                              src="https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg"
                              width="40"
                              height="40"
                              alt=""
                              className="rounded-circle mt-2"
                            />
                          </div>
                          <div className="col-10">
                            <div className={cx("comment-box")}>
                              <h6>
                                {comment.name} <p>2 day ago</p>
                              </h6>

                              <p className="mb-0">{comment.body}</p>
                              <p>Reply to</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      {state.posts && (
        <DividePage
          posts={filterPost}
          sendPage={(post) => {
            setState((prev) => ({ ...prev, postsDivided: post }));
          }}
        />
      )}
    </div>
  );
}

export default Body;
