interface IProps {
    content: string;
}

const Comment = ({ content }: IProps) => {
    return (
        <div className="card card-body comment">
            <img
                className="comment-user-avatar"
                src="https://picsum.photos/200"
                alt=""
            />
            <div className="comment-info">
                <span className="comment-user-name"> Han Solo </span>
                <span className="comment-time"> a day ago </span>
                <div className="comment-content">{content}</div>
                <button className="reply-btn" type="button">
                    Reply to
                </button>
            </div>
        </div>
    );
};

export default Comment;
