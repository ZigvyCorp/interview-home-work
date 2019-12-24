import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "recompose";
import { commentsSelector } from "./comments.selector";
import { ACTION_FETCH } from "./comments.constant";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  id: number | any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const comments = useSelector(commentsSelector);
  React.useEffect(() => {
    if (!comments[id]) {
      dispatch({ type: ACTION_FETCH, payload: { id } });
    }
  }, [id]);
  if (!comments[id]) return null;
  return <WrappedComponent {...{ ...props, comments }} />;
};

export default compose<any, any>(withTranslate, enhance);
