import Header from "../components/Headers/Header"
import {  Layout, theme ,Space, Tag, Collapse} from 'antd';
import { Content } from "antd/es/layout/layout";
import CommentComp from "../components/Comments/CommentComp";
import  { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from "../redux/actions/action";
const comments = [
    {
      id: 1,
      avatar: 'URL_TO_AVATAR',
      name: 'Nguyen Thanh Minh',
      time: new Date(),
      content: 'First comment.'
    },
    {
      id: 2,
      avatar: 'URL_TO_AVATAR',
      name: 'Nguyen Van Minh',
      time: new Date(),
      content: 'Second comment.'
    }
  ];

export default function Home() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { posts  } = useSelector(state => state);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        //dispatch action

      dispatch(fetchPostsRequest());
    }, [dispatch]);

    const loadMorePosts = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    
    const visiblePosts = posts.slice(0, currentPage * 10); // Adjust page size as needed

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset page to 1 when a new search query is entered
    };

    const items = [
        {
          key: '1',
          label: '2 replies',
          children: 
           <div>
             {comments.map(comment => (
                <CommentComp
                key={comment.id}
                avatar={comment.avatar}
                name={comment.name}
                time={comment.time}
                content={comment.content}
                />
            ))}
           </div>
          ,
          showArrow: false,
          style:{
              borderBottom:'1px solid #3333',
              borderRadius:'unset',
              fontWeight:'500',
          
          },
          className:'text-secondary'
         
        },
    ];
      
    const {
        token: { colorBgContainer, borderRadiusLG  },
    } = theme.useToken();
    const onChange = (key) => {
        console.log(key);
    };
   
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
        return text.substring(0, maxLength) + '...';
    };
    return (
    
        <Layout>
                <Header/>
            
                <Content style={{ padding: '0 60px' }}>
                    <div className="d-flex justify-content-end align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search posts..."
                            style={{ marginTop: '20px',width: "30%"}}
                        />
                    </div>
            
                    <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        marginTop:20,
                        borderRadius: borderRadiusLG,
                        
                    }}
                    >
                        {!searchQuery ? visiblePosts.map((post) => (
                            <div className="card mb-4" key={post.id}>
                                <div className="card-body">
                                    <h5 className="card-title text-center"> 
                                    <a style={{cursor:"pointer" ,textDecoration:"none"}} href="/detail">
                                        {post.title}
                                    </a> 
                                    </h5>
                                    <div className="card-body__top d-flex justify-content-between align-items-center">
                                        <div className="d-flex flex-column">
                                            <strong>Author:</strong>
                                            <strong>Create at:</strong>
                                        </div>

                                        <div style={{  maxWidth:'30%' }}>
                                            <Space size={[0, 8]} wrap>
                                                <Tag color="magenta">magenta</Tag>
                                                <Tag color="red">red</Tag>
                                                <Tag color="volcano">volcano</Tag>
                                                <Tag color="orange">orange</Tag>
                                                <Tag color="gold">gold</Tag>
                                                <Tag color="lime">lime</Tag>
                                                <Tag color="green">green</Tag>
                                                <Tag color="cyan">cyan</Tag>
                                                <Tag color="blue">blue</Tag>
                                                <Tag color="geekblue">geekblue</Tag>
                                                <Tag color="purple">purple</Tag>
                                            </Space>
                                        </div>



                                    </div>
                                    <div className="card-body__content mt-4" >
                                        <p> {truncateText(post.body, 100)}</p>
                                    </div>
                                    <div className="card-body__comment mt-4" >
        
                                        <Collapse  onChange={onChange} colorTextDisabled ghost  items={items} />

                                    
                                    </div>

                                    
                                </div>
                            </div>   
                        )) : filteredPosts.map((post) => (
                            <div className="card mb-4" key={post.id}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{post.title}</h5>
                                    <div className="card-body__top d-flex justify-content-between align-items-center">
                                        <div className="d-flex flex-column">
                                            <strong>Author:</strong>
                                            <strong>Create at:</strong>
                                        </div>

                                        <div style={{  maxWidth:'30%' }}>
                                            <Space size={[0, 8]} wrap>
                                                <Tag color="magenta">magenta</Tag>
                                                <Tag color="red">red</Tag>
                                                <Tag color="volcano">volcano</Tag>
                                                <Tag color="orange">orange</Tag>
                                                <Tag color="gold">gold</Tag>
                                                <Tag color="lime">lime</Tag>
                                                <Tag color="green">green</Tag>
                                                <Tag color="cyan">cyan</Tag>
                                                <Tag color="blue">blue</Tag>
                                                <Tag color="geekblue">geekblue</Tag>
                                                <Tag color="purple">purple</Tag>
                                            </Space>
                                        </div>



                                    </div>
                                    <div className="card-body__content mt-4" >
                                        <p>{truncateText(post.body, 100)}</p>
                                    </div>
                                    <div className="card-body__comment mt-4" >
        
                                        <Collapse  onChange={onChange} colorTextDisabled ghost  items={items} />

                                    
                                    </div>

                                    
                                </div>
                            </div>   
                        ))}
                        {!searchQuery && currentPage * 10 < posts.length && (
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="btn btn-secondary" onClick={loadMorePosts}>Load More</button>
                            </div>
                        )}
                    </div>
                </Content>
        
        </Layout>
   
  )
}
