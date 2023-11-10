import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Comment from "../Comment";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

export default function Post({ item }) {
  const [user, setUser] = useState(item.owner);
  const dateCreatedPost = moment(item.createdAt).format("YY-MM-DD, h:mm ");
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [comments, setComments] = useState(item.comments);
  const [data, setData] = useState({
    owner: "654cb8e748ea6f1c64080b81",
    post: item._id,
    content: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setComments(item.comments);
  }, [item]);

  const onSubmitComment = useCallback(() => {
    dispatch(actions.createComment.createCommentRequest(data));
    setData({ ...data, content: "" });
  }, [data, dispatch]);
  const toggleComment = () => {
    setIsOpenComment(!isOpenComment);
  };
  const TagComponent = ({ tag }) => {
    const className = `w-fit  border-[1px] rounded mx-2 px-[2px]  ${
      tag === "vietnam"
        ? "bg-[color:var(--red)] text-[color:var(--textred)] border-[color:var(--textred)]"
        : tag === "consult"
        ? "bg-[color:var(--magenta)] text-[color:var(--textmagenta)] border-[color:var(--textmagenta)]"
        : tag === "it"
        ? "bg-[color:var(--geekblue)] text-[color:var(--textgeekblue)] border-[color:var(--textgeekblue)]"
        : tag === "hala"
        ? "bg-[color:var(--volcano)] text-[color:var(--textvolcano)] border-[color:var(--textvolcano)]"
        : tag === "gov"
        ? "bg-[color:var(--orange)] text-[color:var(--textorange)] border-[color:var(--textorange)]"
        : tag === "breathtaking"
        ? "bg-[color:var(--gold)] text-[color:var(--textgold)] border-[color:var(--textgold)]"
        : tag === "landscape"
        ? "bg-[color:var(--lime)] text-[color:var(--textlime)] border-[color:var(--textlime)]"
        : "bg-[color:var(--cyan)] text-[color:var(--textcyan)] border-[color:var(--textcyan)]"
    }   `;
    return <li className={className}>{tag}</li>;
  };
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="font-semibold text-2xl"> {item.title}</h1>
      <div className="relative flex justify-between mt-[20px]  w-full ">
        <div className="w-1/3 text-left ml-[20px] ">
          <h2 className="text-base">Author: {user?.username}</h2>
          <h2 className="text-base">Created at: {dateCreatedPost} </h2>
        </div>
        <div className="w-1/3"></div>
        <div className="mr-[20px] w-1/3">
          <div className="w-1/2 float-right">
            <ul className=" grid grid-cols-5 gap-[2px] self-end ">
              {item.tags.map((tag) => (
                <TagComponent tag={tag} key={tag} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 px-[20px]">
        <p className="text-justify text-lg">{item.content}</p>
      </div>
      <div className="w-full mt-5 ">
        <div className=" text-gray-500 flex ml-5 mb-2">
          <h3 className="text-sm">
            {comments?.length > 0 ? comments.length : 0} replies
          </h3>
          {isOpenComment ? (
            <div onClick={toggleComment}>
              <KeyboardArrowUpIcon
                style={{ marginLeft: 4, fontSize: 30, cursor: "pointer" }}
              />
            </div>
          ) : (
            <div onClick={toggleComment}>
              <KeyboardArrowDownIcon
                style={{ marginLeft: 4, fontSize: 30, cursor: "pointer" }}
              />
            </div>
          )}
        </div>
        <div className="border-b-[1px] w-full mx-[20px] "></div>
        {isOpenComment ? (
          <div className="flex w-[90%] mx-auto mt-2">
            <input
              className="shadow appearance-none border border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              onChange={(e) => setData({ ...data, content: e.target.value })}
              placeholder="Comment here"
              value={data.content}
            />
            <button
              className="w-20 h-10 ml-2 rounded-md border-cyan-500 border-[1px]"
              onClick={onSubmitComment}
            >
              Send
            </button>
          </div>
        ) : (
          ""
        )}
        {isOpenComment === true && comments?.length > 0
          ? comments.map((comment) => <Comment comment={comment} />)
          : ""}
      </div>
    </div>
  );
}
