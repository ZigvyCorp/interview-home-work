import React, { useState, useContext } from 'react';
import './styles.css';
import axios from 'axios';
import { UserContext } from './contexts/UserContext';
import { Modal, Button, Form } from 'react-bootstrap';

const NewPost = ({ showNewPostModal, setShowNewPostModal }) => {

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [tags, settags] = useState('')
    const { user } = useContext(UserContext);

    const postPost = async () => {
        try {
            const tagsArray = tags.split(',').map(tag => tag.trim());
            const response = await axios.post('http://172.20.10.4:3000/api/posts', {
                owner: user.id,
                title,
                content,
                tags: tagsArray
            });

            if (response.data) {
                setShowNewPostModal(false);
            }
            if (response.data.message) {
                alert(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <Modal show={showNewPostModal} onHide={() => setShowNewPostModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Enter content"
                                value={content}
                                onChange={(e) => setcontent(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Tags (separated by commas)"
                                value={tags}
                                onChange={(e) => settags(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowNewPostModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={postPost}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NewPost;