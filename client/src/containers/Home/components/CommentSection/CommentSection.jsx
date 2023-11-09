import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { commentPost } from "../../../../redux/actions/postAction";

const CommentSection = ({ post, isScroll }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);

  const user = JSON.parse(localStorage.getItem("profile"));

  const commentsRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();

    const finalComment = `${user.name}: ${comment}`;

    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");

    if (isScroll) {
      setTimeout(() => {
        commentsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments?.map((comment, index) => (
            <Typography key={index} gutterBottom variant="subtitle1">
              <strong>{comment.split(": ")[0]}: </strong>
              {comment.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentsRef}></div>
        </div>
        {user?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disalbed={!comment}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
