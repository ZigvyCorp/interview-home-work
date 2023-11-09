import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ButtonBase,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ThumbUpAlt,
  Delete,
  MoreHoriz,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import moment from "moment";
import { deletePost, likePost } from "../../../redux/actions/postAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommentSection from "../../../containers/Home/components/CommentSection/CommentSection";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Post = ({ post, setCurrentId }) => {
  console.log("post", post);

  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [likes, setLikes] = useState(post?.likes);

  const userId = user?.sub || user?._id; // check user id

  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (user?.sub || user?._id)) ? (
        <>
          <ThumbUpAlt fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        {/* <CardMedia
                    className={classes.media}
                    image={
                        post.selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                    title={post.title}
                /> */}
        {/* <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div> */}
        {(user?.sub === post?.creator || user?._id === post?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: "white" }}
              size="small"
            >
              <MoreHoriz fontSize="medium" />
            </Button>
          </div>
        )}
        {/* <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div> */}
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography className={classes.author}>
            Author: {post.name}
          </Typography>
          <Typography className={classes.author}>
            Created at: {dayjs(post.createdAt).format("ll")}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.content}>
            {post?.message?.length <= 100
              ? post.message
              : `${post.message.split(" ").splice(0, 100).join(" ")}...`}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {(user?.sub === post?.creator || user?._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <Delete fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {post?.comments.length} replies
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommentSection post={post} />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Post;
