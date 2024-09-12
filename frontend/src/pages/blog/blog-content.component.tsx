import { IBlog } from "@/models";

type Props = {
  content: IBlog["body"];
};

function BlogContent({ content }: Props) {
  return <p>{content}</p>;
}

export default BlogContent;
