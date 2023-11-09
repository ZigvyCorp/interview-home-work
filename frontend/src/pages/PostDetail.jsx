import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import * as postService from "../services/post.service";
import * as userService from "../services/user.service";
export default function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
        async function fetchData() {
            let postData = await postService.getPostById(postId);
            let userData = await userService.getUserById(postData.userId);
            setPost(postData);
            setAuthor(userData);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="post-title mt-4 align-baseline">
                    <h2>{post?.title}</h2>
                </div>
                <div className="post-author">
                    <div className="post-author-infor">
                        <div className="post-author-name">
                            <p>Creator: {author?.name}</p>
                        </div>
                        <div className="post-created-at">
                            <p>Created at: 2022/01/01</p>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>
                        {post?.body} Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Nulla, perspiciatis eaque quibusdam
                        repellendus repellat quia sed at itaque earum minus
                        obcaecati dicta provident tempora. Dicta minus ad non
                        fuga quo!
                    </p>
                </div>
            </div>
            <Comment postId={postId} />
        </>
    );
}
