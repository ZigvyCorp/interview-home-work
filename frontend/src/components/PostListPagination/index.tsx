import Pagination from "react-bootstrap/Pagination";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import { DEFAULT_PAGE_SIZE } from "src/constants/common";
import { Dispatch, SetStateAction } from "react";

export interface IPostListPaginationProps {
  total: number;
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}

const PostListPagination = (props: IPostListPaginationProps) => {
  const { total, pageIndex, setPageIndex } = props;
  const pageCount: number = Math.ceil(total / DEFAULT_PAGE_SIZE);
  const startIndex: number = (pageIndex - 1) * DEFAULT_PAGE_SIZE + 1;
  const endIndex: number = pageIndex * DEFAULT_PAGE_SIZE;

  function goToPage(pageIndex: number): void {
    setPageIndex(pageIndex);
  }

  function goToPreviousPage(): void {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  }

  function goToNextPage(): void {
    if (pageIndex < pageCount) {
      setPageIndex(pageIndex + 1);
    }
  }

  function truncatePagination(
    currentPage: number,
    pageCount: number
  ): React.ReactNode[] {
    const pageRange: number[] = Array.from(
      { length: pageCount },
      (_, index) => index + 1
    );
    const pagesToDisplay: number[] = pageRange.filter((page: number) => {
      const isPageToDisplay: boolean =
        page === 1 ||
        page === pageCount ||
        (page >= currentPage - 1 && page <= currentPage + 1);
      return isPageToDisplay;
    });

    const pagination: React.ReactNode[] = [];
    let previousPage: number;
    pagesToDisplay.forEach((page: number) => {
      if (previousPage) {
        if (page - previousPage === 2) {
          pagination.push(
            <Pagination.Item onClick={() => goToPage(previousPage + 1)}>
              {previousPage + 1}
            </Pagination.Item>
          );
        } else if (page - previousPage !== 1) {
          pagination.push(<Pagination.Ellipsis />);
        }
      }
      pagination.push(
        <Pagination.Item
          active={page === currentPage}
          onClick={() => goToPage(page)}
        >
          {page}
        </Pagination.Item>
      );
      previousPage = page;
    });
    pagination.unshift(
      <Pagination.Prev onClick={goToPreviousPage} disabled={pageIndex === 1} />
    );
    pagination.push(
      <Pagination.Next
        onClick={goToNextPage}
        disabled={pageIndex === pageCount}
      />
    );
    return pagination;
  }

  return (
    <Stack
      direction="horizontal"
      className="justify-content-between align-items-center mt-3"
    >
      <p className="my-0">
        Total:{" "}
        <Badge bg="secondary">
          {`${startIndex} - ${endIndex > total ? total : endIndex} of ${total}`}
        </Badge>
      </p>

      <Pagination className="justify-content-center my-0">
        {truncatePagination(pageIndex, pageCount)}
      </Pagination>
    </Stack>
  );
};

export default PostListPagination;
