import { compose, hoc } from '../../../@';
import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setExpendedCmt } from '../../actions';

const tagColor = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const container = compose(
  hoc((props) => {
    const dispatch = useDispatch();
    const { post } = props;

    const tags = useMemo(() => {
      return post.tags.map((tag) => ({
        name: tag,
        color: tagColor[Math.floor(Math.random() * 10)],
      }));
    }, [post.tags]);
    const handleToggleExpand = useCallback(() => {
      dispatch(setExpendedCmt({ id: post.id, status: !post.isExpandedCmt }));
    }, [dispatch, post]);
    return {
      ...props,
      handleToggleExpand,
      tags,
    };
  })
);

export default container;
