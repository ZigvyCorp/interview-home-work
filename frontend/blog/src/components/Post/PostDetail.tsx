import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider } from "antd";
import { Comment } from "./Comment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBlogDetailRequest } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

export const PostDetail = ({ id, owner, content, created_at, tags }: IPost) => {
  const [comments, setComments] = useState<boolean>(false);
  const comment = useSelector((state: RootState) => state.comment);
  const truncateContent = (text: string, maxLength: number) => {
    const trimmedText = text.trim();
    const actualLength = trimmedText.replace(/\s/g, "").length;
    if (actualLength > maxLength) {
      const truncatedText = trimmedText.slice(0, maxLength) + " ...";
      return truncatedText;
    }
    return text;
  };
  const postComments = comment.data?.filter((comment) => comment.post === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const handlePostClick = () => {
    dispatch(fetchBlogDetailRequest(params.id));
    navigate(`/post/${id}`);
  };

  return (
    <Card className="w-1/2" key={id} onClick={handlePostClick}>
      <div className="w-11/12 flex justify-between h-full flex-col">
        <div className="flex flex-row">
          <div className="flex flex-row w-1/12">
            <Avatar
              src={
                "https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg"
              }
              alt="User Profile"
            />
          </div>
          <div className="flex flex-row w-full justify-end">
            <div className="flex w-1/2">
              <h3>{owner}</h3>
            </div>
            <div className="flex w-1/2 justify-end">
              <p>{`${created_at}`}</p>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      <div className="break-words">
        <p>{truncateContent(content, 100)}</p>
      </div>
      <div>
        {tags?.map((tag, index) => (
          <span className="text-cyan-500" key={index}>
            #{tag}
          </span>
        ))}
      </div>
      <Divider />
      <div className="flex flex-row">
        <CommentOutlined
          className="text-xl text-gray-500"
          onClick={() => setComments(!comments)}
        />
        <p className="text-gray-500">{`${postComments?.length}`}</p>
      </div>
      {comments && (
        <>
          {postComments.map((comment: IComment) => (
            <div key={comment.id}>
              <Divider />
              <Comment
                id={`${comment.id}`}
                content={`${comment.content}`}
                created_at={`${comment.created_at}`}
                owner={`${comment.owner}`}
                post={`${comment.post}`}
              />
            </div>
          ))}
        </>
      )}
    </Card>
  );
};
