import { IPost } from "@/models";
import BlogItemAuthor from "./blog-item-author.component";
import BlogItemSummayr from "./blog-item-summary";

type Props = {
  blog: IPost;
};

function BlogItem({ blog }: Props) {
  return (
    <li>
      <p className='text-center text-lg font-semibold mb-4'>{blog.title}</p>
      {/* <BlogItemAuthor /> */}
      <BlogItemSummayr summary={blog.body} />
    </li>
  );
}

export default BlogItem;
