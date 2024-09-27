import dayjs from "dayjs";
import React from "react";
import Comment from "./Comment";
import { contentTruncate } from "../libs/helper";
import { Pagination } from "./Pagination/Pagination";

type PostProps = {
  post: Post;
  comments?: Comments[];
};

const Post = ({ post, comments }: PostProps) => {
  return (
    <div className="bg-light m-4 p-3">
      <section>
        <div className="d-flex justify-content-center">
          <h1>{post?.title || "Post title"}</h1>
        </div>
        <div>
          <span>Author: </span>
          <span>{post?.owner || "Unknown"}</span>
        </div>
        <div>
          <span>Created At: </span>
          <span>{dayjs(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div>
          <p>{contentTruncate(post?.content) || "Post content"}</p>
        </div>
      </section>
      <section>
        <div>
          <p>
            <a
              className="text-black-50"
              data-bs-toggle="collapse"
              href={`#collapseComments-${post.id}`}
              role="button"
              aria-expanded="false"
              aria-controls={`collapseComments-${post.id}`}
            >
              {comments?.length || 0} replies
            </a>
          </p>
        </div>
        <hr />
        <div className="collapse" id={`collapseComments-${post.id}`}>
          {comments &&
            comments?.map((comment: Comments) => (
              <Comment
                key={comment.id}
                comment={comment}
                user={{
                  id: 1,
                  username: "meowmeow",
                  password: "1234567890",
                  name: "Cat face",
                  dob: "01/06/2016",
                  createdAt: new Date(1576506719083),
                }}
              ></Comment>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Post;
