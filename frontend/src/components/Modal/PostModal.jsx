import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import { togglePostModal } from '../../actions/dataAction';
import { createPostRequest } from '../../actions/sagaAction';
function PostModal() {
    const { postModal } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        userId: '',
        title: '',
        content: '',
        tags: []
    })
    const setTitle = (e) => {
        setPostData(prev => ({
            ...prev,
            userId: JSON.parse(localStorage.getItem('user'))?._id,
            title: e.target.value
        }))
    }
    const setContent = (e) => {
        setPostData(prev => ({
            ...prev,
            content: e.target.value
        }))
    }
    const handleCreatePost = () => {
        dispatch(createPostRequest(postData));
    }
    const toggle = () => {
        dispatch(togglePostModal())
    }
    return (
        <div>
            <Modal isOpen={postModal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>New Post</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input placeholder='title' value={postData.title} onChange={e => setTitle(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Content</Label>
                        <Input placeholder='content' value={postData.content} onChange={e => setContent(e)} />
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center'>
                        <Button
                            disabled={postData.title === '' || postData.content === ''}
                            color='primary'
                            onClick={handleCreatePost}
                            size='lg'
                        >
                            SEND
                        </Button>
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

export default PostModal;