import { useSelector } from "react-redux";
import CommentComponent from "./CommentComponent";
import { useEffect, useState } from "react";
import moment from "moment/moment";

const PostComponent = ({ item }) => {
  const [toggleReply, setToggleReply] = useState(false);
  const [showFullPost, setShowFullPost] = useState(false);
  const [post, setPost] = useState("");

  // get Comments

  const state = useSelector((state) => state.comment);

  // convert date

  const newDate = moment(item["created_at"]).format("MMM DD, YYYY");

  //TRUNCATED TEXT
  const converText = () => {
    const truncatedText =
      item.content?.length > 100
        ? item.content.substring(0, 100) + "..."
        : item.content;
    setPost(truncatedText);
  };
  useEffect(() => {
    if (!showFullPost) {
      converText();
    } else {
      setPost(item.content);
    }
  }, [showFullPost]);

  const colors = [
    "primary",
    "secondary",
    "danger",
    "info",
    "success",
    "warning",
  ];
  return (
    <div className="container-fluid">
      <h2 className="text-center my-5">{item.title}</h2>
      <div className="px-5 m-auto w-100">
        <div className="row justify-content-between mb-5">
          <div className="col-6">
            <h5>Author: {item.owner.name}</h5>
            <h5>Created at: {newDate}</h5>
          </div>
          <div className="col-2">
            {item.tags.map((item, index) => {
              const colorIndex = colors[index % colors.length];
              return (
                <span
                  className={`border border-${colorIndex} mx-3 text-${colorIndex} p-2 font-weight-bold d-inline-block mb-3`}
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <p
          onClick={() => setShowFullPost(!showFullPost)}
          className="mb-7"
          style={{ cursor: "pointer" }}
        >
          {post}
        </p>
        <div>
          <span
            onClick={() => setToggleReply(!toggleReply)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {state.comments.length} replies
          </span>
          <hr style={{ color: "gray" }} />
          <div className={toggleReply ? `d-block` : `d-none`}>
            {state.comments.map((item, index) => {
              return <CommentComponent key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
      <br />
      <hr style={{ borderTop: "5px solid black", opacity: 1 }} />
    </div>
  );
};

export default PostComponent;
