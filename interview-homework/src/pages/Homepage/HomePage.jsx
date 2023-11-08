import Pagination from '../../components/Pagination/Pagination';
import BlogPost from '../../components/Posts/BlogPost';
import Search from '../../components/Search/Search';
import './homepage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='search'>
        <Search />
      </div>
      <div className='posts'>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
      <div className='pagination'>
        <Pagination />
      </div>
    </div>
  );
};
export default HomePage;
