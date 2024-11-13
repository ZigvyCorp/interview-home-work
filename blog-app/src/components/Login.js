import React, { useState, useContext } from 'react';
import './styles.css';
import axios from 'axios';
import { UserContext } from './contexts/UserContext';
import { Modal, Button, Form } from 'react-bootstrap';

const Login = ({ showLoginModal, setShowLoginModal }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [dob, setdob] = useState(new Date())
    const [isRegister, setisRegister] = useState(false)
    const { loginUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://172.20.10.4:3000/api/users/login', {
                username,
                password,
            });

            if (response.data && response.data.user) {
                loginUser(response.data.user);
                setShowLoginModal(false);
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

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://172.20.10.4:3000/api/users', {
                username,
                password,
                name,
                dob : dob.split('-').join('/'),
            });
            if (response.data) {
                loginUser(response.data); // Update user in UserContext
                setShowLoginModal(false); // Close modal after successful login
                setisRegister(false)
            }
            
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            }
        }
    };

    return (
        <div>
            {/* Login Modal */}
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {isRegister ? (
                            <div>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDob">
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="choose your date"
                                        value={dob}
                                        onChange={(e) => setdob(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                        ) : null}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
                        Close
                    </Button>
                    {isRegister ? (
                        <div>
                        <Button variant="primary" onClick={handleRegister}>
                            Register
                        </Button>
                        <Button onClick={()=>setisRegister(!isRegister)}>đã có tài khoản!</Button>
                        </div>
                    ) :
                        (
                            <div>
                            <Button variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                            <Button onClick={()=>setisRegister(!isRegister)}>chưa có tài khoản?</Button>
                            </div>
                        )}
                    
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;