import { useEffect } from 'react';
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from '../feature/blogSlice';

const Blog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    const blogState = useSelector((state) => state.blog.blog);

    return (
        <>
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='row'>
                        {   Array.isArray(blogState) ?
                            (blogState?.map((item) => {
                                return (
                                    <div className='col-6 mb-3' key={item.id}>
                                        <BlogCard
                                            id={item.id}
                                            title={item.title}
                                            body={item.body}
                                        />
                                    </div>
                                )
                            })) : null
                        }

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog