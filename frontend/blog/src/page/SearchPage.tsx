import { PostList } from "../components/Post/PostList";

export const SearchPage = () => {
  return (
    <div className="flex w-11/12  h-full flex-row ">
      <div className="flex w-full justify-center">
        <PostList />
      </div>
    </div>
  );
};
