import { useEffect, useState } from 'react';
import { formatDate, get100FirstCharacters } from '../utils';
import { useNavigate, useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import { postApi } from '../api';
import { Post } from '../types';

interface PostDetailProps {}

const PostDetail: React.FC<PostDetailProps> = () => {
    const [post, setPost] = useState<Post>();
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const post = await postApi.getOne(Number(id));
            setPost(post);
        };
        fetchPost();
    }, []);

    if (!post) return null;

    return (
        <div className="min-h-[100vh]">
            <div className="bg-black border-b-[1px] border-b-gray-200  fixed top-0 left-0 right-0 h-[60px] flex items-center px-4">
                <p
                    className="hover:underline hover:cursor-pointer select-none text-[15px] text-[#e4e6eb]"
                    onClick={() => navigate('/')}
                >
                    Back
                </p>
            </div>
            <div className="px-[16px] pt-[12px] rounded-md my-8 bg-[#242526] text-[#b0b3b8] mt-[60px]">
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
                        <p className="font-light text-[13px]">{formatDate(post.createdAt)}</p>
                    </div>
                </div>
                <p className="my-[12px] font-bold text-[16px] text-blue-700">{post.title}</p>
                <p className="my-[10px] text-[15px]">{get100FirstCharacters(post.content)}</p>
                <div className="flex justify-between items-center shadow-border-t">
                    <div className="py-[10px] hover:underline hover:cursor-pointer select-none">
                        <p className="text-[15px] font-light">{post.comments.length} comments</p>
                    </div>
                </div>

                <div className="p-4">
                    {post.comments.map(comment => (
                        <CommentItem comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
