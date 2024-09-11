import { CommentDetails } from "@/components";
import { IBlog } from "@/models";

type Props = {
  data: IBlog["comments"];
};
function BlogItemComments({ data }: Props) {
  return (
    <div className='mt-12'>
      <CommentDetails data={data} />
    </div>
  );
}

export default BlogItemComments;
