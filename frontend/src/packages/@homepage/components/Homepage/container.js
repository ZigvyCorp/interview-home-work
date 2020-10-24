import { compose, hoc } from '../../../@';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getPosts } from '../../actions';
import {selectedKeyword, selectedLimit, selectedPage} from '../../selector';

const container = compose(
  hoc((props) => {
    const dispatch = useDispatch();
    const page = useSelector(selectedPage);
    const limit = useSelector(selectedLimit);
    const keyword = useSelector(selectedKeyword)

    useEffect(() => {
      dispatch(getPosts({ page, limit, keyword }));
    }, [dispatch, page, limit,keyword]);

    return {
      ...props,
    };
  })
);

export default container;
