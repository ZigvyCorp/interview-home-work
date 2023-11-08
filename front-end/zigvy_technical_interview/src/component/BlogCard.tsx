import moment from "moment";
import { Link } from "react-router-dom";

const BlogCard = ({ content, title }: { content: string; title: string }) => {
  const time = moment(new Date()).format("DD/MM/YYYY");

  if (content.length > 100) {
    content = content.substring(0, 100) + "...";
  }

  return (
    <div className="p-3 mt-1">
      <div className="border p-4">
        <div className="d-flex flex-row justify-content-between">
          <h3>{title}</h3>
          <p>{time}</p>
        </div>
        <p>{content}</p>
        <Link to={"/posts/1"}>
          <div className="d-flex justify-content-end">View more</div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
