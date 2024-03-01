
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import { toggleLoginModal, toggleSignupModal } from '../../actions/dataAction';
import { useState } from 'react';
import { loginRequest, logoutRequest } from '../../actions/sagaAction';


function LoginModal() {
    const { loginModal } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const setUsername = (e) => {
        setUserData(prev => ({
            ...prev,
            username: e.target.value
        }))
    }
    const setPassword = (e) => {
        setUserData(prev => ({
            ...prev,
            password: e.target.value
        }))
    }
    const handleLogin = () => {
        dispatch(loginRequest(userData));
    }
    const toggle = () => {
        dispatch(toggleLoginModal(false, loginModal.logout ? 'logout' : 'login'))
    }
    const toggleSignup = () => {
        toggle()
        dispatch(toggleSignupModal())
    }
    const handleLogout = () => {
        toggle()
        dispatch(logoutRequest());
    }
    return (
        <div>
            <Modal isOpen={loginModal.state} toggle={toggle} centered>
                <ModalHeader toggle={toggle} >{loginModal.logout ? 'Log Out' : 'Log In'}</ModalHeader>
                <ModalBody>
                    {loginModal.logout
                        ? <p>Are you sure you want to log out?</p>
                        : <>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input placeholder='username' value={userData.username} onChange={e => setUsername(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input placeholder='password' value={userData.password} onChange={e => setPassword(e)} type='password' />
                            </FormGroup>
                            <FormGroup className='d-flex justify-content-center'>
                                <Button
                                    disabled={userData.username === '' || userData.password === ''}
                                    color='primary'
                                    onClick={handleLogin}
                                    size='lg'
                                >
                                    LOG IN
                                </Button>
                            </FormGroup>
                            <FormGroup className='text-center'>
                                <p>Don't have account?
                                    <span className='text-primary' style={{ cursor: 'pointer' }} onClick={toggleSignup}>Register!</span>
                                </p>
                            </FormGroup>
                        </>
                    }
                </ModalBody>
                <ModalFooter >
                    {loginModal.logout
                        ? <Button color="secondary" onClick={handleLogout}>
                            Log out
                        </Button>
                        : <></>
                    }
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LoginModal;