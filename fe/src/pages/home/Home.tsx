import { useEffect } from "react";
import { Post, Pagination } from "../../components";
import { useDispatch } from "react-redux";
import "./style.scss";
import { pagination, postList } from "../../redux/postAction";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.postData);
  useEffect(() => {
    dispatch(postList({}));
    dispatch(pagination({}));
  }, [dispatch]);

  return (
    <div className="container home">
      {data.data ? (
        <div>
          <div className="home-body">
            <Post data={data.data}></Post>
          </div>
          <div className="home-footer">
            <Pagination total={data.total}></Pagination>
          </div>
        </div>
      ) : (
        <p className="home-loading">Loading...</p>
      )}
    </div>
  );
};

export default Home;
