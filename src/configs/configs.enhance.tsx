import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { compose } from "recompose";
import { configsSelector } from "./configs.selector";
import { ACTION_FETCH } from "./configs.constant";

interface IProps {}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { isFetched } = useSelector(configsSelector);
  console.log(useSelector(configsSelector));
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

export default compose<any, any>(
  connect(state => ({}), {}),
  enhance
);
