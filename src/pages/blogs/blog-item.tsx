import { IPost } from "@/models";

type Props = {
  blog: IPost;
};

function BlogItem({ blog }: Props) {
  return (
    <li>
      <p className='text-center text-lg font-semibold mb-4'>{blog.title}</p>
    </li>
  );
}

export default BlogItem;
