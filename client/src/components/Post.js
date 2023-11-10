import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import AddCommentModal from "./AddCommentModal";

export default function Post({ userId, id, title, body }) {
    const SUMMARY_CHAR_LIMIT = 100;
    const trimmedText = body.substring(0, SUMMARY_CHAR_LIMIT) + "...";
    const { comments } = useSelector((state) => state.reducer);

    const [isTrimmed, setTrimmedFlag] = useState(true);
    const [user, setUser] = useState(null);
    const [postComments, setPostComments] = useState(null);

    // Modal
    const [show, setShow] = useState(false);

    const userURL = `https://jsonplaceholder.typicode.com/users/` + userId
    //const commentsURL = `https://jsonplaceholder.typicode.com/comments?postId=` + id
    useEffect(() => {
        axios.get(userURL).then((response) => {
            setUser(response.data);
        });
        // axios.get(commentsURL).then((response) => {
        //     setComments(response.data);
        // });

        const filteredComments = comments.filter((c) => c.postId === id)
        setPostComments(filteredComments);
    }, [comments]);

    // Modal
    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="bg-white border rounded-2 py-3 px-5 mx-3 my-4">
            <h2>{title}</h2>
            <div className="d-flex flex-column justify-content-start align-items-start">
                <p>Author: {user?.name || "unknown"}</p>
                <p>Created at: Sep 20, 2018</p>
            </div>

            <div>
                <p className="text-left">{isTrimmed ? trimmedText : body}
                    <strong
                        role="button"
                        onClick={() => setTrimmedFlag(!isTrimmed)}
                    >
                        {isTrimmed ? " See more" : " See less"}
                    </strong>
                </p>
            </div>

            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{postComments?.length + (postComments?.length > 1 ? ` replies` : ` reply`)}</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled d-flex flex-column">
                                {postComments && postComments.map((comment) => (
                                    <li key={comment.id} className="d-flex flex-column justify-content-start align-items-start">
                                        <h6>By: {comment.email}</h6>
                                        <h6>Name: {comment.name}</h6>
                                        <p className="text-left">{comment.body}</p>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" onClick={handleShow}>
                                Add New Comment
                            </Button>
                            <AddCommentModal
                                show={show}
                                handleClose={handleClose}
                                id={id}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div >
    );
}