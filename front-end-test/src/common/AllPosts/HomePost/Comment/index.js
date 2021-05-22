import React from 'react';
import './styles.css'

const Comment = (props) => {

    const replyHandler = () => {
        alert("Replied!!")
    }

    return (
        <div className="PostComment">
            <div className="ProfileImg">
                <img width="50"
                    src="https://64.media.tumblr.com/de6c729d2df14768254961954dbc844a/2749b92af0756078-8b/s250x400/b39452e40aa73c62a0871386796a15c76cec6e5d.jpg" 
                    alt="commented user profile" />
            </div>

            <div className="CommentDetails">
                <p className="text-muted">{props.comment.name}</p> 
                <p>{props.comment.body}</p>

                <button onClick={replyHandler}>Reply to</button>
            </div>

        </div>
    );
}
 
export default Comment;