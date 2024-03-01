import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import { toggleLoginModal, toggleSignupModal } from '../../actions/dataAction';
import { signupRequest } from '../../actions/sagaAction';
function SignupModal() {
    const { signupModal } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        name: '',
        dob: ''
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
    const setDob = (e) => {
        setUserData(prev => ({
            ...prev,
            dob: e.target.value
        }))
    }
    const setName = (e) => {
        setUserData(prev => ({
            ...prev,
            name: e.target.value
        }))
    }
    const handleSignup = () => {
        console.log('signup')
        dispatch(signupRequest(userData));
    }
    const toggle = () => {
        dispatch(toggleSignupModal())
    }
    const toggleLogin = () => {
        dispatch(toggleLoginModal(true, 'login'))
        toggle()
    }
    return (
        <div>
            <Modal isOpen={signupModal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input placeholder='username' value={userData.username} onChange={e => setUsername(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input placeholder='password' value={userData.password} onChange={e => setPassword(e)} type='password' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input placeholder='name' value={userData.name} onChange={e => setName(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Dob</Label>
                        <Input placeholder='DD/MM/YYYY' value={userData.dob} onChange={e => setDob(e)} type='text' />
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center'>
                        <Button
                            disabled={userData.username === '' || userData.password === ''}
                            color='primary'
                            onClick={handleSignup}
                            size='lg'
                        >
                            SIGN UP
                        </Button>
                    </FormGroup>
                    <FormGroup className='text-center'>
                        <p>Have account before?
                            <span className='text-primary' style={{ cursor: 'pointer' }} onClick={toggleLogin}>Log in now!</span>
                        </p>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignupModal;