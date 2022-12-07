import Card from "../Card/Card";

function Posts({ data, loading, error }) {
  return (
    <div
      style={{ gap: "50px" }}
      className="pb-5 d-flex flex-wrap justify-content-center"
    >
      {loading && <h3>Loading...</h3>}
      {data.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
      {data.length === 0 && !loading && <h3>No posts available</h3>}
      {error && !loading && <h3>{error}</h3>}
    </div>
  );
}

export default Posts;
