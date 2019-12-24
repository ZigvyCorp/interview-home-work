import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { compose } from "recompose";
import { postsSelector } from "./posts.selector";
import { ACTION_FETCH } from "./posts.constant";

interface IProps {
  fetchData: () => { type: string };
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { isFetched } = useSelector(postsSelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isFetched) {
      dispatch({
        type: ACTION_FETCH
      });
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  connect(state => ({}), {}),
  enhance
);
