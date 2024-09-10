import { IUser } from "@/models";
import { formatDate, getRandomDate } from "@/utils/date.util";

type Props = {
  author: IUser;
};

function BlogItemAuthor({ author }: Props) {
  const randomDate = getRandomDate(new Date(2015, 0, 1), new Date());
  const formattedDate = formatDate(randomDate);

  return (
    <div className='flex flex-col gap'>
      <p>Author: {author.name}</p>
      <p>Created At: {formattedDate} </p>
    </div>
  );
}

export default BlogItemAuthor;
