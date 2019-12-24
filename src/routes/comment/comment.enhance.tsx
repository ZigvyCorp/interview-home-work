import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "recompose";
import { commentSelector } from "./comment.selector";
import { ACTION_FETCH } from "./comment.constant";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  id: number | any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const comment = useSelector(commentSelector);
  React.useEffect(() => {
    if (!comment[id]) {
      dispatch({ type: ACTION_FETCH, payload: { id } });
    }
  }, [id]);
  if (!comment[id]) return null;
  return <WrappedComponent {...{ ...props, comment }} />;
};

export default compose<any, any>(withTranslate, enhance);
