export interface IBlogList {
  className?: string;
}

const BlogList = ({ className = "" }: IBlogList) => {
  return <div>BlogList</div>;
};

export default BlogList;
