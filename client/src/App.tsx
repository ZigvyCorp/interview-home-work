import React, { useEffect } from "react";
import postsApi from "./api/posts.api";

const App: React.FC = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await postsApi.getAllPosts();
      console.log("🚀 ~ fetchData ~ data:", data);
    }
    fetchData();
  }, []);
  return (
    <section>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </section>
  );
};

export default App;
