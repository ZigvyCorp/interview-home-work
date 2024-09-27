import React, {useRef, useState } from "react";
import { Layout, Card, Tag, Collapse, Button, Input } from "antd";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Header, Content } = Layout;
const { Panel } = Collapse;

const fetchPostAndComment = async () => {
  const [postResponse, commentResponse] = await Promise.all([
      axios.get('api/posts/'),
      axios.get('api/comments'),
  ]);

  return {
    posts: postResponse.data, 
    comments: commentResponse.data, 
  };
};

function HomePage() {
  const [postMore, setPostMore] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]); 
  const searchRef = useRef('');
const {
  data: { posts, comments } = {},
  
  error,
  isLoading,
  isFetched,
} = useQuery('postAndComment', fetchPostAndComment, {
  staleTime: 1000 * 60 * 3, 
});

    if (isLoading) return <Loading />;
    if (!isFetched) return <div>Fetching...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

const toggleExpanded = (postId) => {
 if(postMore.includes(postId)){
   setPostMore(postMore.filter((id) => id !== postId));
 }
 else{
    setPostMore([...postMore, postId]);
 }
};

const handleInputChange = (event) => {
  searchRef.current = event.target.value; 
};

const handleSearch = async (value) => {
  try {
    const response = await fetch(`api/posts/${encodeURIComponent(value)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    const data = await response.json();
    setSearchResults(data); 
    console.log("response", data);
  } catch (error) {
    toast.error('Không tìm thấy bài viết');
  }
};
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const setTime = (dateTime) => {
  const now = new Date();
  const commentDate = new Date(dateTime);
  const seconds = Math.floor((now - commentDate) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} năm trước`;
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} tháng trước`;
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} ngày trước`;
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} giờ trước`;
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} phút trước`;
  return "Vừa mới đây";
};


  return (
    <Layout >
       <Header className="grid grid-cols-12 gap-x-3 p-0 items-center">
      <div className="logo grid col-span-2 h-10 justify-center items-center mb-6">
        <h2 className="text-white ">Logo</h2>
      </div>

      <div className="grid col-span-3 h-10 justify-center items-center mb-6">
        <h2 className="text-white bg-slate-600 px-3 ">Blogs</h2>
      </div>
       
      <div className="col-span-7 flex items-center lg:justify-end  lg:mr-7">
        <Input.Search
          placeholder="Tìm kiếm"
          onSearch={handleSearch}
          onChange={handleInputChange}
          className="bg-white w-full max-w-[100px] lg:max-w-[300px] h-auto mr-2"
        />
        <img src="https://via.placeholder.com/150" alt="avatar" className="w-10 h-10 rounded-full" />
        <span className="ml-2 text-white">Dương</span>
      </div>
    </Header>

      <Content className="p-6 ">
      {(searchResults.length > 0 ? searchResults : posts)?.map((post) => (
          <Card
            key={post.id}
            title={<h1 className="text-[20px] font-bold">{post?.title}</h1>}
            
            className="mb-4 text-[15px]"
          >
            <div className="grid row-span-2">
           
            <div className=" grid-cols-12 grid mb-2">
              <div className="col-span-6 text-left items-center grid">
                <h1>Author: {post?.owner.name}</h1>
                <h1>Created at: {formatDate(post?.created_at)}</h1>
              </div>
              <div className="col-span-6 text-right">
                {post?.tags?.map((tag) => (
                  <Tag color={tag} key={tag} className="p-1">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="grid ">
              <h1 className="text-left">
                {postMore.includes(post.id) ? post.content : post.content.slice(0,100)}
                {!postMore.includes(post.id) && post.content.length > 100 && '...'}
                </h1>
              <Button type="link" onClick={() => toggleExpanded(post.id)}>
                {postMore.includes(post.id) ? 'Thu gọn' : 'Xem thêm'}
              </Button>
            </div>
          </div>
           

            <Collapse bordered={false} ghost>
              <Panel header={<h1 className="flex border-b border-gray pb-1"> {comments.filter(comment => comment.post.id === post.id).length} replies</h1>} key="1" >
              {comments
                  .filter((comment) => comment.post.id === post.id) 
                  .map((comment) => (
                    <div key={comment.id} className="flex space-x-2 items-start justify-items-start mb-3">
                      <img src="https://via.placeholder.com/150" alt="avatar" className="w-10 h-10 rounded-full" />
                      <div className="grid justify-items-start">
                        <h1 className="mb-1 text-gray-400">{comment.owner.name} <span className="ml-3">{setTime(comment.created_at)}</span></h1>
                        <h1 className="text-left">{comment.content}</h1>
                        <p className="mt-3 text-gray-400">Reply to</p>
                      </div>
                    </div>
                  ))}
              </Panel>
            </Collapse>
          </Card>
        ))}
      </Content>
    </Layout>
  );
}

export default HomePage;
