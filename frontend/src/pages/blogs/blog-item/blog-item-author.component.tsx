import { AuthorDetails } from "@/components";
import { IUser } from "@/models";

type Props = {
  author: IUser;
};

function BlogItemAuthor({ author }: Props) {
  return <AuthorDetails author={author} />;
}

export default BlogItemAuthor;
