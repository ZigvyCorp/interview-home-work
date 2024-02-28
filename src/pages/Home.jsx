import { useDispatch } from "react-redux";
import Posts from "../components/Posts";
import { useEffect } from "react";
import { setCurrentPage } from "../redux/post/postPage";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [dispatch]);
    return (
        <div className="flex flex-col gap-6 p-[50px] max-w-6xl mx-auto">
            <Posts />
        </div>
    );
}

export default Home;
