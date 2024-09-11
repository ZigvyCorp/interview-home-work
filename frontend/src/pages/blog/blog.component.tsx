import { useParams } from "react-router-dom";
import useBlog from "./blog.hook";
import BlogAuthorDetails from "./blog-author-details.component";
import BlogContent from "./blog-content.component";
import BlogComments from "./blog-comments.component";

function Blog() {
  const { id } = useParams();
  const { data, isPending, error } = useBlog(id || "");

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data?.data) return <p>No user found with that id</p>;

  const blog = data.data;
  console.log("---blog--");
  console.log(blog);
  return (
    <div className='mt-8'>
      <h2 className='text-3xl text-center'>{blog.title}</h2>
      <div className='flex justify-between mt-8 mb-12'>
        <BlogAuthorDetails author={blog.user} />
      </div>
      <BlogContent content={blog.body} />
      <BlogComments data={blog.comments} />
    </div>
  );
}

export default Blog;
