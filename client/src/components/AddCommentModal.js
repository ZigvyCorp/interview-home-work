import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { useDispatch } from "react-redux";
import { onAddComment } from '../redux/actions';

function AddCommentModal({ show, handleClose, id }) {
    const dispatch = useDispatch();

    const { Formik } = formik;

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        body: yup.string().required(),
    });

    const commentURL = `https://jsonplaceholder.typicode.com/comments?postId=` + id

    const handleSubmit = (values) => {
        axios.post(commentURL, {
            postId: id,
            name: values.name,
            email: values.email,
            body: values.body
        })
            .then((res) => {
                console.log("Add Comment success: ", res.data);
                dispatch(onAddComment(res.data));
                return res.data;
            })
            .catch((err) => {
                console.log("Add Comment error: ", err);
                return err;
            })
            .finally(() => {
                handleClose();
            })
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Add a comment for this post
                    <hr />
                    <Formik
                        validationSchema={schema}
                        onSubmit={values => handleSubmit(values)}
                        initialValues={{
                            name: '',
                            email: '',
                            body: ''
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="validationFormik01">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationFormik02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationFormik03">
                                    <Form.Label>Body</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Body"
                                        name="body"
                                        value={values.body}
                                        onChange={handleChange}
                                        isInvalid={!!errors.body}
                                        as="textarea"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.body}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <hr />
                                <Button type="submit">Submit form</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddCommentModal;