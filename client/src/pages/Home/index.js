import { useEffect, useState } from 'react';
import { Container,Row ,Col} from 'react-bootstrap';

import Post from "../../components/Post";
import { getPostsAndPanigate } from "../../api/postApi";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const reponse = await getPostsAndPanigate();
            setPosts(reponse.data);
            setLoading(true);
        };
        fetchData();
    }, []);
    return (
        <Container>
           <Row>
                {posts && posts.map((post, index) => (
                    <Col key={index} xs={4} style={{marginBottom:'2rem'}}>
                    <Post  data={post} />
                    </Col>
                ))}
           </Row>
        </Container>
    );
}

export default Home;