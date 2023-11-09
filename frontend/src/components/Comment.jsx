import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import Pagination from "./Pagination";
import * as commentService from "../services/comment.service";

// eslint-disable-next-line react/prop-types
export default function Comment({ postId }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [comments, setComments] = useState({
        totalItem: 0,
        data: [],
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const totalItems = comments.totalItem;
    const totalPage = Math.ceil(totalItems / itemPerPage);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    useEffect(() => {
        commentService.getCommentsByPostId(postId).then((data) => {
            let totalItem = data.length;
            data = data.slice(startIndex, endIndex);
            setComments({
                totalItem,
                data,
            });
        });
    }, [currentPage]);

    const handleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="container mt-3">
                <div
                    className="comment-header border-bottom boder-secondary p-3 text-secondary"
                    onClick={handleCollapsed}
                >
                    {comments.totalItem} Replies
                </div>

                <div className={`collapsed ${isCollapsed ? "" : "show"}`}>
                    {comments.data?.map((comment, ind) => (
                        <CommentItem data={comment} key={ind} />
                    ))}
                    <div className="container d-flex justify-content-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPage={totalPage}
                            onPageChange={handleChangePage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
