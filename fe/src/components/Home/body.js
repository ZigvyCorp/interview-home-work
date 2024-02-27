import className from "classnames/bind";
import style from "./Home.module.scss";
import { useEffect, useMemo, useState } from "react";
import DividePage from "../dividePage";

const cx = className.bind(style);
function Body() {
  const colorList = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  let [state, setState] = useState({
    users: null,
    posts: null,
    postsDivided: null,
    comments: null,
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        setState((prev) => ({ ...prev, posts: json, postsDivided: json }))
      );
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
  const countComment = useMemo(
    () => (postId) => {
      let count = state.comments?.filter(
        (comment) => comment.postId === postId
      );
      return count.length;
    },
    [state.comments]
  );

  return (
    <div>
      {state.users &&
        state.posts &&
        state.comments &&
        state.postsDivided.map((post) => (
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
                      color: item,
                      border: `1px solid ${item}`,
                      borderRadius: "4px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("body-content")}>
              <h5>{post.body}</h5>
            </div>

            <div>
              <div>
                <div className={cx("card-comment", "w-100")}>
                  <p className="text-start">{countComment(post.id)} replies</p>
                  <hr></hr>
                  <div className="d-flex">
                    <div>
                      <img
                        width="40"
                        height="40"
                        alt=""
                        className="rounded-circle mt-2"
                      />
                    </div>
                    <div className="col-10">
                      <div className={cx("comment-box")}>
                        <h6>
                          adf <p>2 day ago</p>
                        </h6>

                        <p className="mb-0">
                          Bộ Tài chính được giao xây dựng khung pháp lý để cấm
                          hoặc điều chỉnh tài sản ảo và các tổ chức cung ứng
                          dịch vụ tài sản này, hoàn thành trong tháng 5/2025.
                          Việc này nhằm hạn chế rủi ro về rửa tiền, tài trợ
                          khủng bố liên quan tới loại tài sản này.
                        </p>
                        <p>Reply to</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {state.posts && (
        <DividePage
          posts={state.posts}
          sendPage={(post) => {
            console.log(post);
            setState((prev) => ({ ...prev, postsDivided: post }));
          }}
        />
      )}
    </div>
  );
}

export default Body;
