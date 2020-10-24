import { compose, hoc } from '../../../@';
import { useSelector } from 'react-redux';
import { selectedPosts } from '../../selector';

const container = compose(
  hoc((props) => {
    const posts = useSelector(selectedPosts);
    return {
      ...props,
      posts,
    };
  })
);

export default container;
