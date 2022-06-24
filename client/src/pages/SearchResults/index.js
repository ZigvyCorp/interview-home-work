import { useEffect, useState } from 'react';
import { Container,Row ,Col} from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";

import Post from "../../components/Post";
import { searchPosts } from "../../api/postApi";

function SearchResults() {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keywords,setKeywords] = useState('');
    useEffect(() => {
        let query = searchParams.get('query');
        setKeywords(query)
        const fetchData = async () => {
            const reponse = await searchPosts(query);
            setPosts(reponse.data);
        };
        fetchData();
    }, [keywords]);
    return (
        <Container>
            <h2>Search Results</h2>
           <Row>
                {posts.length > 0 ? posts.map((post, index) => (
                    <Col key={index} xs={4} style={{marginBottom:'2rem'}}>
                    <Post  data={post} />
                    </Col>
                )) : <h4>No posts found</h4>}
           </Row>
        </Container>
    );
}

export default SearchResults;