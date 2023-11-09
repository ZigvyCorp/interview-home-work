import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Blog.module.css';
import Menu from '../../components/Menu';
import PostItem from '../../components/PostItem/PostItem';
import { useClassName } from '../../hooks';

const Blog = () => {
    // Custom hook for handling CSS class names
    const cx = useClassName(styles);

    // Get the current post ID from the URL parameters
    const currentPost = useParams();

    // Redux selector to get the list of posts from the state
    const posts = useSelector((state) => state.posts.posts);

    // Filter the list of posts based post ID
    const post = posts.find((p) => p.id === parseInt(currentPost.id));

    return (
        <div>
            <Menu />
            <PostItem item={post} className={cx('post')} />
        </div>
    );
};

export default Blog;
