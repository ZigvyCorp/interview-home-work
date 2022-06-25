import { IComment, IPost, IUser } from '../global';
import CommentList from './CommentList';
import Tag from './Tag';

interface IProps {
    dataPost: IPost;
    dataUser: IUser;
    dataComments: IComment[];
    fakeDate: string;
}

const Post = ({ dataPost, dataUser, dataComments, fakeDate }: IProps) => {
    return (
        <div className="post">
            <h3 className="post-title mb-5"> {dataPost.title} </h3>
            <div className="post-info">
                <span>{`Author: ${dataUser.name}`}</span>
                <span>{`Created at: ${fakeDate}`}</span>
                <div className="tag-list">
                    <Tag text="blue" color="blue" />
                    <Tag text="green" color="green" />
                    <Tag text="red" color="red" />
                    <Tag text="purple" color="purple" />
                    <Tag text="yellow" color="yellow" />
                </div>
            </div>
            <p className="post-content mb-4"> {dataPost.body} </p>
            <CommentList dataComments={dataComments} />
        </div>
    );
};

export default Post;
