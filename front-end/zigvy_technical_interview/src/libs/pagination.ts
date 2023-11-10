import { Post } from "../model/type";

interface paginationProps {
  currentPage: number;
  itemsPerPage: number;
  posts: Post[];
}

interface pageNumberProps {
  posts: Post[];
  itemperPage: number;
}

export const paginationLibs = ({
  currentPage,
  itemsPerPage,
  posts,
}: paginationProps) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return posts.slice(indexOfFirstItem, indexOfLastItem);
};

export const numberOfPage = ({ posts, itemperPage }: pageNumberProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts?.length / itemperPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};
