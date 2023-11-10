import React from "react";

import { add3Dots } from "../helpers/add3dots";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const comments = useSelector((state) => state.commentReducer.comments);
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div className="mt-6">
      {posts.data.map((post) => (
        <div className="my-5 border-b-black border-b-2 h">
          <Link to={`/posts/${post.id}`}>
            <div >
              <p className="text-center text-3xl font-bold">{post.title}</p>

              <div className="font-semibold mt-3">
                <span>
                  Author:
                  <span className="ml-1">
                    {users.map((user) => {
                      if (post.userId === user.id) {
                        return user.name;
                      }
                    })}
                  </span>
                </span>
                <p>Created At: Nov 09, 2023</p>
              </div>

              <div className="mt-5 mb-9 ">
                <p> {add3Dots(post.body, 100)}</p>
              </div>
            </div>
          </Link>

          <Comments postId={post.id} comments={comments} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
