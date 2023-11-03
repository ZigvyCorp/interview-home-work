import { useDispatch, useSelector } from "react-redux";
import PostItem from "./component/PostItem";
import "./home.styles.css";
import { useEffect } from "react";
import { RootState } from "../../store";
import { fetchData } from "../../store/slices/postSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { postList = [], loading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="home-container">
      {postList.map((item) => (
        <PostItem data={item} key={item.id} />
      ))}
    </div>
  );
}

export default HomePage;
