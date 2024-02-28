import { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../api/postApi";
import moment from "moment";
import { Space, Tag, List } from "antd";
import { FaCommentDots } from "react-icons/fa6";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Collapse } from "antd";
import { Comment } from "@ant-design/compatible";
import { getUserByPostId } from "../api/userApi";
import { getComments } from "../api/commentApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

function PostDetail() {
    const { pathname } = useLocation();
    const params = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(params.postId);

                if (response) {
                    setPost(response);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPost();
    }, [params.postId]);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const comments = await getComments(params.postId);
                if (comments) {
                    setComments(comments);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchComment();
    }, [params.postId]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUserByPostId(params.postId);
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUser();
    }, [params.postId]);

    return (
        <div className="pt-[100px]  flex flex-col gap-6 p-[50px] max-w-6xl mx-auto">
            <Tooltip title="Back">
                <Link
                    to="/"
                    className="fixed  cursor-pointer top-[80px] left-10 bg-yellow-100 z-10 border-blue-300 rounded-full py-2 border-2 w-[40px] flex items-center justify-center"
                >
                    <IoMdArrowRoundBack className="text-green-500" />
                </Link>
            </Tooltip>

            <div className="bg-gray-50  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full p-4">
                <div className="text-xl font-bold text-justify block capitalize mb-5 md:text-2xl mx-auto">
                    {post?.title ? post.title : ""}
                </div>
                <div className="flex justify-between items-center gap-5 pb-4">
                    <div className="text-left flex-1">
                        <p>{`Author: ${user?.username}`}</p>
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
                <div className="mb-2">{`${
                    post?.body?.substring(0, 100).charAt(0).toUpperCase() +
                    post?.body?.substring(1, 100)
                } ${post?.body} ${post?.body}`}</div>

                <div>
                    <Collapse
                        ghost
                        defaultActiveKey={["0"]}
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
                                                            author={
                                                                item?.author
                                                            }
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
        </div>
    );
}

export default PostDetail;
