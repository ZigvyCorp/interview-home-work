import { Input } from "@/components";
import { useGetSearchTerms } from "@/store";
import useBlogs from "./blogs.hook";

function BlogInput() {
  const searchTerm = useGetSearchTerms();
  // const { handleChangeSearch } = useBlogs();
  return (
    <div className='mt-6'>
      <Input
        onChange={(e) => {}}
        value={searchTerm}
        placeholder='Search Blogs....'
      />
    </div>
  );
}

export default BlogInput;
