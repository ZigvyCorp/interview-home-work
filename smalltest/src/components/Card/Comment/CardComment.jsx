import './CardComment.scss'

function CardComment(props) {
    const comment = props.data;
    return (
        <div className="card-comment-container">
            <div className="card">
                <div className="card-comment-title">
                    {comment.name}
                </div>
                <div className="card-comment-body">
                    <div className="comment-body">
                        {comment.body}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CardComment;
