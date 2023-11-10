import { useEffect, useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

const URL = "http://localhost:5000"

function Home(){
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [commentPost, setCommentPost] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchPost = async() => {
            try {
                const response = await fetch(`${URL}/post`, {method: 'GET'});
                const postData = await response.json();

                setPost(postData.posts);

                if(postData.posts.id){
                    setCommentPost(postData.posts.id)
                }
            } catch (error) {
                console.log('error: ', error);
            }
        };

        fetchPost();
        
        const fetchComment = async() =>{
            try {
                const response = await fetch(`${URL}/comment/${commentPost}`, {method: 'GET'})
                const commentData = await response.json();

                setComment(commentData.commentsofPost);
                setCount(commentData.count)

            } catch (error) {
                console.log('error: ', error);
            }

        };

        fetchComment();
    
    },[commentPost])

    return(
        <Stack gap={3}>
            {post.map((post) => {
                return(
                <Container className="border border-info border border-3  rounded" key={post.id}>
                    <Row className="text-center"><h2>{post.title}</h2></Row>
                    <Row>
                        <p>Author: {post.owner}</p>
                    </Row>
                    <Row>
                    <p>Created at: {(post.created_at)}</p>
                    </Row>
                    <p> {(post.content).substring(0, 100) + "..." }</p>
                    <Accordion className="border border-primary rounded">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{`Comment(${count})`}</Accordion.Header>
                            <Accordion.Body>
                                {comment.map((comment) =>{
                                    return(
                                        <Container key={comment.id}>
                                            <Row className="border border-primary rounded mt-2" >
                                                <p>Created At: {comment.created_at}</p>
                                                <p>{comment.content}</p>
                                            </Row> 
                                        </Container>
                                    )
                                })
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
                )
            })}
        </Stack>
    )
}

export default Home;