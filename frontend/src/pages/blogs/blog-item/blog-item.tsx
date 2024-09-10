import { IPost, IUser } from "@/models";
import BlogItemAuthor from "./blog-item-author.component";
import BlogItemSummary from "./blog-item-summary";

type Props = {
  blog: IPost & { user: IUser };
};

function BlogItem({ blog }: Props) {
  return (
    <li className='px-8 py-12 border-b-4 border-b-black'>
      <h2 className='text-center text-3xl font-semibold mb-4'>{blog.title}</h2>
      <div className='flex justify-between'>
        <BlogItemAuthor author={blog.user} />
        <p>COLOR pallate</p>
      </div>
      <BlogItemSummary summary={blog.body} />
    </li>
  );
}

export default BlogItem;
