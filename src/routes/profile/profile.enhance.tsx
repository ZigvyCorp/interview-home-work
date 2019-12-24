import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { compose } from "recompose";
import { postsSelector } from "./profile.selector";
import { ACTION_POSTS_FETCH } from "./profile.constant";

interface IProps {}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { isFetched } = useSelector(postsSelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isFetched) {
      dispatch({
        type: ACTION_POSTS_FETCH
      });
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  connect(state => ({}), {}),
  enhance
);
