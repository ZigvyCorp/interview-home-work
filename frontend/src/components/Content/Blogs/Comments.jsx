import styles from '../../../styles/custom.module.css'
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri"
import { formatTime } from './Post';
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setReply, toggleAlertModal } from '../../../actions/dataAction';
import { createCommentRequest } from '../../../actions/sagaAction';
const CommentContent = ({ comments, postId }) => {
    const [show, setShow] = useState(-1)
    const [write, setWrite] = useState(-1)
    const { reply } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const comment = () => {
        return comments.find(comment => comment?.postId === postId)
    }
    const handleSetReply = (e) => {
        console.log('postId: ', postId)
        setWrite(postId)
        dispatch(setReply({ content: e.target.value, postId }))
    }
    const handleSendReply = () => {
        if (reply.userId === '') {
            dispatch(toggleAlertModal('You must login before reply this post', 'red'))
        }
        if (reply.content === '') {
            dispatch(toggleAlertModal('You should write something before send your reply', 'red'))
        }
        if (reply.userId !== '' && reply.content !== '') {
            dispatch(createCommentRequest(reply))
        }
    }
    return (
        <div className="mt-2 text-secondary">
            <p
                style={{ cursor: "pointer", color: '#2b2a2a' }}
                className={styles.custom_text}
                onClick={() => {
                    console.log(comment())
                    setShow(prev => prev === -1 ? comment()?.postId : -1)
                }}
            >
                {comment()?.count} {comment()?.count > 1 ? 'replies' : 'reply'}
            </p>
            {show === comment()?.postId
                ? comment()?.list?.map((comment, i) => (
                    <div key={i} className="d-flex align-items-center">
                        <RiAccountCircleLine style={{ width: 35, height: 35 }} />
                        <div className='mx-2'>
                            <p className='my-2 text-start'>{comment?.owner?.username}
                                <small style={{ fontSize: 12 }}> {formatTime(comment).date + '-' + formatTime(comment).month + '-' + formatTime(comment).year}</small>
                            </p>
                            <p className='my-0 text-start' style={{ color: '#2b2a2a' }}>{comment.content}</p>
                        </div>
                    </div>
                ))
                : <></>
            }
            <InputGroup className='mt-2'>
                <Input
                    type='textarea'
                    placeholder='Your reply...'
                    value={write === comment()?.postId ? reply.content : ''}
                    onChange={e => handleSetReply(e)}
                />
                <Button color='primary' outline style={{ width: '10%' }} disabled={write !== comment()?.postId} onClick={handleSendReply}>
                    <b>Send</b>
                </Button>
            </InputGroup>

        </div>
    )
}

export default CommentContent