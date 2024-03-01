import styles from '../../../styles/custom.module.css'
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri"
import { formatTime } from './Post';
const CommentContent = ({ comments, postId }) => {
    const [show, setShow] = useState(-1)
    const comment = () => {
        return comments.find(comment => comment?.postId === postId)
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
        </div>
    )
}

export default CommentContent