import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../redux/post/postsSlice";
import PostItem from "./PostItem";
import { Button, Spin } from "antd";
import { setCurrentPage } from "../redux/post/postPage";

function Posts() {
    const dispatch = useDispatch();

    const { posts, isLoading } = useSelector((state) => state.posts);
    const currentPage = useSelector((state) => state.currentPage.currentPage);
    const { searchTerm } = useSelector((state) => state.searchTerm);

    useEffect(() => {
        dispatch(getPostsRequest({ page: currentPage, searchTerm }));
    }, [dispatch, currentPage, searchTerm]);

    const handleNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const handlePreviousPage = () => {
        dispatch(setCurrentPage(Math.max(currentPage - 1, 1)));
    };

    return (
        <div className="flex flex-col gap-4 w-full mt-[60px]">
            {isLoading ? (
                <div className="text-4xl text-center">
                    <Spin size="large" />
                </div>
            ) : (
                posts?.map((post) => (
                    <div key={post._id} className="flex-1">
                        <PostItem post={post} />
                    </div>
                ))
            )}

            {!isLoading && posts.length === 0 && (
                <div className="text-center text-2xl font-bold">
                    {" "}
                    No more posts to display
                </div>
            )}
            {posts && (
                <div className="flex gap-4 mx-auto">
                    {currentPage > 1 && (
                        <Button
                            disabled={isLoading}
                            type="text"
                            className="border-blue-300"
                            onClick={handlePreviousPage}
                        >
                            Previous Page
                        </Button>
                    )}

                    <Button
                        disabled={isLoading || posts.length === 0}
                        type="text"
                        className="border-blue-300"
                        onClick={handleNextPage}
                    >
                        Next Page
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Posts;
