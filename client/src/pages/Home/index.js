import { useEffect, useState } from 'react';
import { Container,Row ,Col,Pagination} from 'react-bootstrap';

import Post from "../../components/Post";
import { getPostsAndPanigate } from "../../api/postApi";

function Home() {
    const [posts, setPosts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const handleBackPage = () => {
        if(currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    }
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    useEffect(() => {
        const fetchData = async () => {
            const reponse = await getPostsAndPanigate(currentPage,postsPerPage);
            setPosts(reponse.data);
        };
        fetchData();
    }, [currentPage,postsPerPage]);
    return (
        <Container>
            <h2>My Blog</h2>
           <Row>
                {posts.length > 0 ? posts.map((post, index) => (
                    <Col key={index} xs={4} style={{marginBottom:'2rem'}}>
                    <Post  data={post} />
                    </Col>
                )) : <h4>Can't get post from server</h4>}
           </Row>
           <Pagination>
            <Pagination.Prev onClick={handleBackPage}/>
            <Pagination.Next onClick={handleNextPage}/>
        </Pagination>
        </Container>
    );
}

export default Home;