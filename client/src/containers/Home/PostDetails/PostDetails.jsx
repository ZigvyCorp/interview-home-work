import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import {
  actionGetPost,
  actionGetPosts,
} from "../../../redux/actions/postAction.js";
import { actionGetPostsBySearch } from "../../../redux/actions/postAction";
import CommentSection from "../components/CommentSection/CommentSection.jsx";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    dispatch(actionGetPost(id));
  }, [id]);

  useEffect(() => {
    dispatch(actionGetPosts());
  }, []);

  useEffect(() => {
    // if (post) {
    //   dispatch(
    //     actionGetPostsBySearch({
    //       search: "none",
    //       tags: post?.tags?.join(","),
    //     })
    //   );
    // }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (_id) => navigate(`/posts/${_id}`);
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post?.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post?.tags?.map((tag, index) => (
              <Link
                to={`/tags/${tag}`}
                style={{
                  textDecoration: "none",
                  color: "#3f51b5",
                }}
                key={index}
              >
                {` #${tag} `}
              </Link>
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post?.message}
          </Typography>
          <Typography variant="h6">
            Created by:
            <Link
              to={`/creators/${post?.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post?.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} isScroll={true} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  style={{
                    margin: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
