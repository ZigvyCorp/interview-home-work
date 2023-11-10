import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostDetailFetch } from "../redux/postDetailSlice";
import { useEffect } from "react";
import PostItem from "../components/PostItem";

export default function PostDetail() {
    const { id } = useParams();
    const { postDetail, isLoading } = useSelector(state => state.postDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostDetailFetch(id));
    }, [dispatch]);

    if (isLoading) {
        return <p className="container-md mt-3 fw-bold">Loading...</p>
    }

    return (
        <div className="container-md mt-4">
            {postDetail.post && <PostItem data={postDetail} detail />}
        </div>
    );
}