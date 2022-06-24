import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import moment from 'moment';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getPostsById } from "../../api/postApi";
import { getCommentsOfPost } from "../../api/commentApi";

function Detail() {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const reponse = await getPostsById(id);
            const commentsData = await getCommentsOfPost(id);
            setPosts(reponse.data);
            setComments(commentsData.data);
        };
        fetchData();
    }, [id]);
    return (
        <Container>
            <div className="d-flex">
                <h2>{posts.title}</h2>
                <div className=' d-flex ms-auto'>
                    <FontAwesomeIcon icon={faClockFour} />
                    <p className='ps-1'>
                        {moment(posts.createdAt).format("DD/MM/YYYY")}
                    </p>
                </div>
            </div>
            <p>{posts.content}</p>

            <h6>
                Author : <b>{posts.owner?.name}</b>
            </h6>
            <div className='comments mt-5'>
                <h3>Comments</h3>
                {comments.length > 0 ? comments.map((comment, index) => (
                    <div key={index} className='comment bg-light p-1 ps-3 mb-3'>
                        <div className='d-flex'>
                            <h5>{comment.owner.name || comment.owner.username}</h5>
                            <div className='ms-auto d-flex'>
                                <FontAwesomeIcon icon={faClockFour} />
                                <p className='ps-1'>
                                    {moment(comment.createdAt).format("DD/MM/YYYY")}
                                </p>
                            </div>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                )):<h5>No comments</h5>}
            </div>
        </Container>
    );
}

export default Detail;