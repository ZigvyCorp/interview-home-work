import { IPost } from "src/interfaces/post.interface";
import CollapseComment from "./CollapseComment";
import { useState } from "react";
import { Button, Modal } from "antd";

type Props = {
    post: IPost;
};

const BlogCard = ({ post }: Props) => {
    const date = new Date(post.created_at as string);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const showModal = () => {
        //setIsModalOpen(true);
        setOpen(true);
    };

    const handleOk = () => {
        // setIsModalOpen(false);
        setOpen(false);
    };

    const handleCancel = () => {
        //setIsModalOpen(false);
        setOpen(false);
    };
    return (
        <li className="w-full   border-black border-b-[5px] px-[30px] text-[27px]">
            <div
                className="w-full text-center font-medium text-[47px] my-[20px]  flex justify-center cursor-pointer"
                onClick={showModal}
            >
                <span className="max-w-[1000px]">{post.title}</span>
            </div>
            <section className="w-full text-left mt-[20px] mb-[30px]">
                <span className=" block">
                    Author: {post.author.name + " " + post.author.username}
                </span>
                <span> Created at: {date.toDateString()}</span>
            </section>
            <p className="mb-[40px]">{post.body}</p>
            <CollapseComment comments={post.comments} />

            <Modal
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <div
                    className="w-full text-center font-medium text-[47px] my-[20px]  flex justify-center cursor-pointer"
                    onClick={showModal}
                >
                    <span className="max-w-[1000px]">{post.title}</span>
                </div>
                <section className="w-full text-left mt-[20px] mb-[30px] text-[27px]">
                    <span className=" block">
                        Author: {post.author.name + " " + post.author.username}
                    </span>
                    <span> Created at: {date.toDateString()}</span>
                </section>
                <p className="mb-[40px] text-[27px]">{post.body}</p>
                <CollapseComment comments={post.comments} />
            </Modal>
        </li>
    );
};

export default BlogCard;
