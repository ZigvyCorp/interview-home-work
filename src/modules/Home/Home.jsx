import Posts from '../../components/Posts';
import React, { useEffect, useState } from 'react';
import { getComments, getPosts } from '../../fetchers/blog';
import { getUsers } from '../../fetchers/user';
import useQuery from '../../hooks/useQuery';
import PostsPagination from '../../components/PostsPagination';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const TOTAL_POST = 100; // fake data
const LIMIT = 10;
const TOTAL_PAGE = TOTAL_POST / LIMIT;

const Home = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const page = Number(query.get('page')) || 1;

  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const processData = async (page) => {
    setIsLoading(true);

    const userData = await getUsers();
    const postData = await getPosts(page);
    const commentData = await getComments();

    const myPosts = postData.map((item) => {
      const { userId } = item;
      const user = userData.find((userItem) => {
        return userItem.id === userId;
      });

      const comments = commentData.filter((commentItem) => {
        if (commentItem.postId === item.id) {
          return true;
        }
        return false;
      });
      item.user = user;
      item.comments = comments;
      return item;
    });

    setIsLoading(false);

    setPosts(myPosts);
  };

  const handleChangePage = (page) => {
    navigate(`/?page=${page}`);
  };

  useEffect(() => {
    processData(page);
  }, [page]);

  return (
    <div>
      {isLoading ? <Loading /> : <Posts posts={posts} />}
      <div className="d-flex justify-content-center pt-5">
        <PostsPagination
          totalPage={TOTAL_PAGE}
          active={page}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Home;
