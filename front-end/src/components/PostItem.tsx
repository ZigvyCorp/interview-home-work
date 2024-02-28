import { Post } from '../store/slices/postSlice';

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <div>
            <div className="px-[16px] pt-[12px] rounded-md my-2 bg-[#242526] text-[#b0b3b8]">
                <div className="flex items-center gap-2">
                    <div className="w-[40px]">
                        <img
                            src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg?fit=512%2C20000&quality=95&ssl=1"
                            alt="avatar"
                            className="rounded-full w-[40px] h-[40px]"
                        />
                    </div>
                    <div className="">
                        <h4 className="font-bold text-[15px] text-[#e4e6eb]">{post.owner.name}</h4>
                        <p className="font-light text-[13px]">12m</p>
                    </div>
                </div>
                <p className="my-[12px] font-bold text-[16px] text-blue-700">{post.title}</p>
                <p className="my-[10px] text-[15px]">{post.content}</p>
                <div className="flex justify-between items-center shadow-border-t">
                    <div className="py-[10px] hover:underline hover:cursor-pointer">
                        <p className="text-[15px] font-light">{post.comments.length} comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
