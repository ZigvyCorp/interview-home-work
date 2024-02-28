/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";
import { Space, Tag, List } from "antd";
import { FaCommentDots } from "react-icons/fa6";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Collapse } from "antd";
import { Comment } from "@ant-design/compatible";
import { Fragment, useEffect, useState } from "react";
import { getUserByPostId } from "../api/userApi";
import { getComments } from "../api/commentApi";

export default function PostItem({ post }) {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUserByPostId(post?._id);
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUser();
    }, [post?._id]);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const comments = await getComments(post?._id);
                if (comments) {
                    setComments(comments);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchComment();
    }, [post?._id]);

    return (
        <div className="bg-gray-50 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full p-4">
            <Link
                className="text-xl font-bold text-justify block capitalize mb-5 md:text-2xl mx-auto"
                to={`/posts/${post._id}`}
            >
                {post?.title ? post.title : ""}
            </Link>
            <div className="flex justify-between items-center gap-5 pb-4">
                <div className="text-left flex-1">
                    <p>{`Author: ${user?.username ?? "Leanne Graham"}`}</p>
                    <p>{`Created at: ${moment(new Date()).format(
                        "MMM D, YYYY"
                    )}`}</p>
                </div>
                <div className="flex-1 w-1/2">
                    <Space size={[0, 8]} wrap>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </Space>
                </div>
            </div>
            <Link to={`/posts/${post._id}`}>
                <div className="mb-2">
                    {post?.body ? (
                        <>
                            {post.body.length > 100 ? (
                                <>
                                    {post.body
                                        .substring(0, 100)
                                        .charAt(0)
                                        .toUpperCase() +
                                        post.body.substring(1, 100)}
                                    ...
                                </>
                            ) : (
                                post.body.charAt(0).toUpperCase() +
                                post.body.substring(1)
                            )}
                        </>
                    ) : null}
                </div>
            </Link>

            <div>
                <Collapse
                    ghost
                    expandIcon={({ isActive }) =>
                        isActive ? <Fragment /> : <Fragment />
                    }
                    items={[
                        {
                            label: (
                                <div className="text-blue-400 cursor-pointer flex gap-2 items-center text-sm">
                                    {" "}
                                    <FaCommentDots />{" "}
                                    <span>
                                        {(comments.length &&
                                            `${comments.length}`) ||
                                            0}{" "}
                                        replies
                                    </span>{" "}
                                </div>
                            ),
                            children: (
                                <>
                                    {comments && (
                                        <List
                                            className="comment-list"
                                            itemLayout="horizontal"
                                            dataSource={comments}
                                            renderItem={(item) => (
                                                <li>
                                                    <Comment
                                                        actions={[
                                                            <span key="comment-list-reply-to-0">
                                                                Reply to
                                                            </span>,
                                                        ]}
                                                        author={item?.author}
                                                        avatar={
                                                            <Avatar
                                                                className="bg-blue-300  ml-3"
                                                                icon={
                                                                    <UserOutlined />
                                                                }
                                                            />
                                                        }
                                                        content={item.body}
                                                        datetime={
                                                            <Tooltip
                                                                title={moment().format(
                                                                    "YYYY-MM-DD HH:mm:ss"
                                                                )}
                                                            >
                                                                <span>
                                                                    {moment().fromNow()}
                                                                </span>
                                                            </Tooltip>
                                                        }
                                                    />
                                                </li>
                                            )}
                                        />
                                    )}
                                </>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}
