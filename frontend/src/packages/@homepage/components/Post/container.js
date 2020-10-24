import { compose, hoc } from '../../../@';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setExpendedCmt } from '../../actions';

const container = compose(
  hoc((props) => {
    const dispatch = useDispatch();
    const { post } = props;
    const handleToggleExpand = useCallback(() => {
      dispatch(setExpendedCmt({ id: post.id, status: !post.isExpandedCmt }));
    }, [dispatch, post]);
    return {
      ...props,
      handleToggleExpand,
    };
  })
);

export default container;
