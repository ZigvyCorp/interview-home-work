import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts, getUsers, getComments } from "../../../redux/posts/posts.action"
import Avatar from "@material-ui/core/Avatar"
import { CardHeader } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "30px",
    marginBottom: "30px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    "& .left": {
      textAlign: "left"
    }
  },
    body: {
        textAlign: "left",
        marginTop: "25px"
    },
    cardAction: {
        paddingLeft: 0,
        paddingRight: 0
  },
  itemComment: {
    borderBottom: "2px solid #000",
    paddingBottom: "25px",
    marginBottom: "25px"
  }
}));

const Blogs = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [expandedId, setExpanded] = React.useState(0);
  const {posts, users, comments} = useSelector(state => state.posts)
  const [listPost, setListPost] = React.useState(posts);
  const [listUser, setListUser] = React.useState(users);
  const [listComment, setListComment] = React.useState(comments);

  React.useEffect(() => {
    const dispatchGetPost = bindActionCreators(getPosts, dispatch)
    const dispatchGetComments = bindActionCreators(getComments, dispatch)
    const dispatchGetUsers = bindActionCreators(getUsers, dispatch)
    dispatchGetPost()
    dispatchGetComments()
    dispatchGetUsers()
  }, [dispatch])

  const handleExpandClick = (id) => {
    setExpanded(id);
  };

  const renderPost = () => {
    return listPost.map(post => {
      let listCommentByUser = listComment.filter(x => x.postId === post.id)
      let user = listUser.find(x => x.id === post.userId)
      return (
        <Card className={classes.root} key={post.id}>
          <Link to={`/blog/${post.id}?userId=${post.userId}`}><CardHeader title={post.title} className="text-center"/></Link>
            <div className={classes.header}>
              <div className="left">
              <div className="auther">Author: {user ? user.name : ""}</div>
                <div className="created-at">Created at: {moment().format("ll")}</div>
              </div>
              <div className="right"></div>
            </div>
            <div className={classes.body} dangerouslySetInnerHTML={{
                  __html: post.body,
                }}>
            </div>
            <CardActions disableSpacing className={classes.cardAction}>
              {listCommentByUser.length} {listCommentByUser.length > 1 ? "comments": "comment"}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expandedId === post.id,
                })}
                onClick={() => handleExpandClick(post.id)}
                aria-expanded={expandedId === post.id}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expandedId === post.id} timeout="auto" unmountOnExit>
            {listCommentByUser.map(comment => (
              <div className="d-flex">
                <div className="mr-5">
                  <Avatar/>
                </div>
                <div dangerouslySetInnerHTML={{
                  __html: comment.body,
                }} className={classes.itemComment}></div>
                </div>
              ))}
            </Collapse>
          </Card>
      )
    })
  }

  return (
    <div className="container blogs-page">
      <div className="row">
        <div className="col">
          {renderPost()}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
