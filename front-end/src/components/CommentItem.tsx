import { Comment } from '../store/slices/postSlice';
import { formatDate } from '../utils';

interface CommentItemProps {
    comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <div className="border-t-[1px] border-white">
            <div className="px-[16px] pt-[12px] rounded-md my-2 bg-[#242526] text-[#b0b3b8]">
                <div className="flex items-center gap-2">
                    <div className="w-[36px]">
                        <img
                            src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg?fit=512%2C20000&quality=95&ssl=1"
                            alt="avatar"
                            className="rounded-full w-[36px] h-[36px]"
                        />
                    </div>
                    <div className="">
                        <h4 className="font-bold text-[14px] text-[#e4e6eb]">{comment.email}</h4>
                        <p className="font-light text-[12px]">{formatDate(comment.createdAt)}</p>
                    </div>
                </div>
                <p className="my-[10px] text-[14px]">{comment.content}</p>
            </div>
        </div>
    );
};

export default CommentItem;
