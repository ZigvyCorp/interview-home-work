import { useState } from "react";
import User from "./assets/user.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const mounth = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const tag = [
  { name: "magenta", color: "#FF00FF" },
  { name: "red", color: "#FF0000" },
  { name: "volcano", color: "#CC6600" },
  { name: "orange", color: "#FF9900" },
  { name: "gold", color: "#FFFF33" },
  { name: "lime", color: "#33FF33" },
  { name: "green", color: "#00FF00" },
  { name: "cyan", color: "#6699FF" },
  { name: "blue", color: "#3399FF" },
  { name: "geekblue", color: "#0000CC" },
  { name: "purple", color: "#330099" },
];

function App() {
  const [select, setSelect] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const nav = useNavigate();

  const handleNav = (id) => {
    nav(`/detail/` + id);
  };

  const count = useSelector((state) => state.counter);

  const handleClick = (postId) => {
    setSelect((prev) => (prev === postId ? 0 : postId));
  };

  const renderComment = (postId) => {
    const comments = count.comment?.filter(
      (comment) => comment.postId === postId
    );

    return (
      <>
        <p
          className="cursor-pointer inline-block text-sm text-gray-600"
          onClick={() => handleClick(postId)}
        >
          {comments.length} replies
        </p>
        <div className="border-[1px] border-gray-200"></div>

        {select === postId &&
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-2">
              <img className="h-fit" src={User} alt="user" />

              <div className="grid gap-2">
                <div className="flex gap-2">
                  <p className="text-sm text-gray-500">{comment?.name}</p>
                  <p className="text-xs text-gray-400">a day ago</p>
                </div>
                <p className="font-normal">{comment?.body}</p>

                <p className="cursor-pointer text-sm text-gray-500">Reply to</p>
              </div>
            </div>
          ))}
      </>
    );
  };
  const renderUser = (userId) => {
    const user = count.user?.find((user) => user.id === userId);
    return (
      <div>
        <div className="flex gap-1 font-medium">
          <p>Author:</p>
          <p>{user.name}</p>
        </div>
        <div className="flex gap-1">
          <p>Create at:</p>
          <p>{renderDate()}</p>
        </div>
      </div>
    );
  };

  const renderDate = () => {
    const date = new Date();
    return `${
      mounth[date.getMonth() + 1]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const showSummary = (text = "") => {
    return text.length < 100 ? text : `${text.substring(0, 100)}...`;
  };

  return (
    <div className="font-medium">
      <div className="flex m-1 border-2 border-black items-center px-2">
        <p className="flex-1">Logo</p>
        <p className="border-r-2 border-l-2 p-2 border-black bg-gray-200">
          Blogs
        </p>
        <p className="flex-1 text-end">Bùi Minh Tuấn</p>
      </div>

      <div className="flex justify-end mx-4 gap-1">
        <p className="">Search</p>
        <input
          className="border border-black rounded right-0 px-2"
          type="text"
          placeholder="enter title"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>

      {count.value
        ?.filter((post) => post?.title.includes(keyWord))
        .map((post) => (
          <div key={post?.id}>
            <p
              onClick={() => handleNav(post.id)}
              className="flex justify-center text-2xl font-semibold py-4 cursor-pointer"
            >
              {post?.title}
            </p>

            <div className="grid gap-2 mx-4">
              <div className="flex justify-between items-baseline">
                {renderUser(post?.userId)}
                <div className="flex w-[300px] flex-wrap gap-1 ">
                  {tag.map((idx) => (
                    <p
                      key={idx.name}
                      className="border px-1 rounded text-sm"
                      style={{
                        borderColor: idx.color,
                        color: idx.color,
                      }}
                    >
                      {idx.name}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p>{showSummary(post?.body)}</p>
              </div>

              <div className="grid gap-4 mt-4">{renderComment(post?.id)}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
