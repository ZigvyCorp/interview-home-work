import Posts from "../post/posts";

function Home() {
  return (
    <div>
      <Posts showSearch={true} />
    </div>
  );
}

export default Home;
