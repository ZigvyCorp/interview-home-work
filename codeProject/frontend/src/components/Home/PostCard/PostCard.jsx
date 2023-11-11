import React, { useState, useEffect } from "react";
import ShowMoreText from "react-show-more-text";

import { Card, Typography, Image, Space } from "antd";
import MarkdownViewComponent from "../.././common/MarkdownView";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../.././Avatar/Avatar";
import axios from "axios";
import moment from "moment";
import "./PostCard.css";
import { fetchComments } from "../../../redux/actions/commentActions";
const AvatarComment = ({ owner }) => {
  const [user, setUser] = useState();
  console.log("user", user);
  useEffect(() => {
    console.log("pp");

    const fetchData = async () => {
      const response1 = await axios.get(`http://localhost:3000/users/${owner}`);
      const comments = response1.data;
      setUser(comments);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>{user?.username}</div>
    </>
  ); // Dữ liệu bình luận được trả về từ API
};

const PostCard = (props) => {
  const dispatch = useDispatch();

  const { username, avatar, image, detail, time, title, countComment, postID } =
    props;
  const { Title, Text } = Typography;
  const [openComment, setOpenComment] = useState(false);
  const [dataComment, setDataComment] = useState();
  useEffect(() => {
    console.log("pp");

    const fetchData = async (postID) => {
      console.log("pp", postID);

      try {
        const response = await axios.get(
          `http://localhost:3000/comments/post/${postID}`
        );
        const comments = response.data.comments; // Dữ liệu bình luận được trả về từ API

        console.log("comments11", comments);
        setDataComment(comments);
        // Xử lý dữ liệu bình luận tại đây (nếu cần)

        return comments; // Trả về dữ liệu bình luận
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu bình luận:", error);
        throw error; // Xử lý lỗi (nếu cần)
      }
    };
    if (openComment) fetchData(postID);
  }, [openComment]);

  const handleClickComment = async (postID) => {
    console.log("handleClickComment", postID);
    const _opencomment = !openComment;
    if (_opencomment) {
      // Get request using axios with error handling
      //   await axios
      //     .get(urlComment)
      //     .then((response) => {
      //       console.log("comment jjj", response.data);
      //       setDataCommentPost(response.data);
      //     })
      //     .catch((error) => {
      //       console.error("There was an error!", error);
      //     });
      // }
    }
    setOpenComment(_opencomment);
  };
  function displayTimeAgo(date) {
    const now = moment();
    const pastDate = moment(date);

    const yearsAgo = now.diff(pastDate, "years");
    const monthsAgo = now.diff(pastDate, "months");
    const daysAgo = now.diff(pastDate, "days");

    if (yearsAgo >= 1) {
      return yearsAgo + " years ago";
    } else if (monthsAgo >= 1) {
      return monthsAgo + " months ago";
    } else if (daysAgo >= 1) {
      return daysAgo + " days ago";
    } else {
      return "Today";
    }
  }

  return (
    <Card
      className="header-solid h-full"
      style={{
        width: "100%",
        marginTop: 10,
      }}
    >
      <div className="post-card">
        <h2 className="post-title">{title}</h2>
        {/* author */}
        <div className="author-des">
          {/* avatar */}
          <Avatar item={time} srcImage={avatar} username={username} />
        </div>
      </div>

      <ShowMoreText
        /* Default options */
        lines={3}
        more={<b>Show more</b>}
        less={<b>Show less</b>}
        anchorClass="show-more-less-clickable"
        expanded={false}
        width={600}
        truncatedEndingComponent={"... "}
      >
        <MarkdownViewComponent value={detail} />
      </ShowMoreText>
      {image !== "" ? <Image height={400} width="100%" src={image} /> : ""}

      <div onClick={() => handleClickComment(postID)}>
        {countComment} replies
      </div>
      <div>
        {openComment &&
          dataComment?.map((comment) => (
            <div style={{ margin: "10px 0 20px 0" }} key={comment.id}>
              <Space>
                <AvatarComment owner={comment.owner_id} />
                &nbsp;
                <span>{displayTimeAgo(comment.created_at)}</span>
              </Space>
              <p>{comment.content}</p>
            </div>
          ))}
      </div>
    </Card>
  );
};
export { PostCard, AvatarComment };
