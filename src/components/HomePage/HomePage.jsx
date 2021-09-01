import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducers/posts";
import PostCard from "../Post/PostCard"

const HomePage = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const posts = useSelector((state) => state.posts.posts);

    //search filter
    const handleFilter = (data) => {
        return data.filter((item) => {
          return ["title"].some((newItem) => {
              return (
                  item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
                );
            });
        });
      }

    return (
        <div>
            <div className="search-box">
                <input type="text" className="search-bar" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div>
                {handleFilter(posts).map(post => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};

export default HomePage;