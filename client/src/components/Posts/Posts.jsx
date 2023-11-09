import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { actionGetPosts } from "../../redux/actions/postAction";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    const getPosts = () => {
      dispatch(actionGetPosts());
    };

    getPosts();
  }, []);

  const renderPosts = () => {
    // return posts.map((post) => (
    //     <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
    //         <Post post={post} setCurrentId={setCurrentId} />
    //     </Grid>
    // ));
    return posts.map((post) => (
      <div className={classes.post} key={post._id}>
        <Post post={post} setCurrentId={setCurrentId} />
      </div>
    ));
  };

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {renderPosts()}
    </Grid>
  );
};

export default Posts;
