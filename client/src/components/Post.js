import { useEffect, useState } from "react";
import axios from "axios";

import Accordion from 'react-bootstrap/Accordion';

export default function Post({ userId, id, title, body }) {
    const SUMMARY_CHAR_LIMIT = 100;
    const trimmedText = body.substring(0, SUMMARY_CHAR_LIMIT) + "...";

    const [isTrimmed, setTrimmedFlag] = useState(true);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState(null);

    const userURL = `https://jsonplaceholder.typicode.com/users/` + userId
    const commentsURL = `https://jsonplaceholder.typicode.com/comments?postId=` + id
    useEffect(() => {
        axios.get(userURL).then((response) => {
            setUser(response.data);
        });
        axios.get(commentsURL).then((response) => {
            setComments(response.data);
        });
    }, []);

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
                        <Accordion.Header>{comments?.length + (comments?.length > 1 ? ` replies` : ` reply`)}</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled d-flex flex-column">
                                {comments && comments.map((comment) => (
                                    <li key={comment.id} className="d-flex flex-column justify-content-start align-items-start">
                                        <h6>By: {comment.email}</h6>
                                        <h6>Name: {comment.name}</h6>
                                        <p className="text-left">{comment.body}</p>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div >
    );
}