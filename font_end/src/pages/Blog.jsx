import { useParams } from 'react-router-dom';

const Blog = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default Blog;
