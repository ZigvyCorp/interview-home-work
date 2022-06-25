import { IComment } from '../global';
import Comment from './Comment';

interface IProps {
    dataComments: IComment[];
}

const CommentList = ({ dataComments }: IProps) => {
    const random = Math.floor(Math.random() * 99999);

    return (
        <div className="comment-list">
            <a
                className="comment-show-toggle-btn"
                data-bs-toggle="collapse"
                href={`#collapse-${random}`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapse-${random}`}
            >
                {`${dataComments.length} replies`}
            </a>
            <div className="collapse" id={`collapse-${random}`}>
                {dataComments.map((comment, index) => (
                    <Comment key={index} content={comment.body} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;
