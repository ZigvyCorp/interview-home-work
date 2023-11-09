import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPosts } from "../../redux/actions/postAction.js";

const Paginate = ({ page }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { numberOfPages } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (page) dispatch(actionGetPosts(page));
  }, [page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
