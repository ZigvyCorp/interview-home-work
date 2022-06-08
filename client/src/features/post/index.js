import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getPostAsync, selectPost } from "./postSlice";

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
export default function PostList() {
  const dispatch = useDispatch();
  // const { posts } = useSelector(selectPost);

  useEffect(() => {
    dispatch(getPostAsync());
  }, [dispatch]);

  return (
    <div>
      <p>post list</p>
      <ul>
        {posts.length &&
          posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  );
}
