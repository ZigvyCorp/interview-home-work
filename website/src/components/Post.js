export default function Post({ post }) {
  return (
    <div class="card m-3">
      <h2 class="card-header text-center">{post.title}</h2>
      <div class="card-body">
        <h5 class="card-title">Author: {}</h5>
        <h5 class="card-title">
          Created at: {new Date(post.createdAt).toDateString()}
        </h5>
        <blockquote class="blockquote mb-0">
          <p>{post.body}</p>
        </blockquote>
      </div>
    </div>
  );
}
