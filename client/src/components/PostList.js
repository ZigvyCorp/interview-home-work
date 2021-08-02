import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import Post from './Post';
// import Pagination from './Pagination';

export default function PostList() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(posts);
  useEffect(() => {
    requestPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts() {
    const res = await fetch(url);
    const data = await res.json();
    localStorage.setItem('posts', JSON.stringify(data));
    setPosts(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUrl(`https://jsonplaceholder.typicode.com/posts?${searchTerm}`);
    // console.log(e);
    let storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    let filterPosts = storedPosts.filter((filtered) =>
      filtered.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(filterPosts);
    setPosts(filterPosts);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {/* {(posts?.length > 0)? <Pagination
          data={posts}
          RenderComponent={Post}
          pageLimit={5}
          dataLimit={10}
        />} */}

      <SearchBox
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
      />

      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
