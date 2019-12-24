import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { compose } from "recompose";
import { ACTION_FETCH } from "./post.constant";
import { postSelector } from "./post.selector";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { withRouter } from "react-router-dom";

interface IProps {
  id: string;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const post = useSelector(postSelector);
  React.useEffect(() => {
    if (!post[id]) {
      dispatch({ type: ACTION_FETCH, payload: { id } });
    }
  }, [id]);
  if (!post[id]) return null;
  return <WrappedComponent {...props} post={post} />;
};

export default compose<any, any>(
  withRouter,
  connect(state => ({}), {}),
  withTranslate,
  enhance
);
