import { Post } from "../model/type";

interface searchPostProps {
  posts: Post[];
  searchValue: string;
}
export const searchPost = ({ posts, searchValue }: searchPostProps) => {
  const filterPost = posts?.filter((post) => {
    if (searchValue === "") {
      return post;
    }
    return post.title.includes(searchValue);
  });
  return filterPost;
};
