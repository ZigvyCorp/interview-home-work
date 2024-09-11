import { IUser } from "@/models";
import BlogItemAuthor from "../blogs/blog-item/blog-item-author.component";

type Props = {
  author: IUser;
};

function BlogAuthorDetails({ author }: Props) {
  return <BlogItemAuthor author={author} />;
}

export default BlogAuthorDetails;
