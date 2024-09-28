import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "../components";
import Container from "react-bootstrap/Container";

export const PostDetailPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);

    const handleLoadingPostData = (post) => {
        setPost(post)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => handleLoadingPostData(post))
    }, [postId])

    return (
        <Container fluid>
        <Post detail data={post}/>
        </Container>
    );
};