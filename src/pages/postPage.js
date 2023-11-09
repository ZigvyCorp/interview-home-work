import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import ListPort from '../components/ListPost';
import Header from './header';
import { Container, Row } from 'react-bootstrap';

function PostPage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleSearch = (searchText) => {
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <Container>
                <Row className="mt-5">
                </Row>
                <Row className='mt-5'>
                    {filteredPosts ? (<ListPort posts={filteredPosts} />) : (<ListPort posts={filteredPosts} />)}
                </Row>
            </Container>
        </div>
    );
}

export default PostPage;
