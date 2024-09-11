import { CommentDetails } from "@/components";
import { IComment } from "@/models";

type Props = {
  data: IComment[];
};
function BlogComments({ data }: Props) {
  console.log("why???");
  console.log(data);
  return (
    <div className='mt-12'>
      <CommentDetails data={data} />
    </div>
  );
}

export default BlogComments;
