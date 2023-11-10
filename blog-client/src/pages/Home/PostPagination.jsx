import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { changePage, startLoadPosts } from "../../reducers/postReducer";

const PostPagination = () => {
	const { page, size, total } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const maxPage = Math.ceil(total / size);
	const pages = new Array(maxPage).fill(1).map((_, i) => i + 1);

	const onPageClick = (e, toPage) => {
		e.preventDefault();
		if (page === toPage) return;

		dispatch(changePage(toPage));
		dispatch(startLoadPosts())
		window.scrollTo(0, 0);
	};

	return (
		<Pagination>
			<PaginationItem>
				<PaginationLink first href="#" onClick={(e) => onPageClick(e, 1)} />
			</PaginationItem>
			<PaginationItem disabled={page - 1 < 1}>
				<PaginationLink
					href="#"
					previous
					onClick={(e) => onPageClick(e, page - 1)}
				/>
			</PaginationItem>
			{pages.map((pageNum) => (
				<PaginationItem
					key={pageNum}
					active={pageNum === page}
					onClick={(e) => onPageClick(e, pageNum)}
				>
					<PaginationLink href="#">{pageNum}</PaginationLink>
				</PaginationItem>
			))}

			<PaginationItem disabled={page + 1 > maxPage}>
				<PaginationLink
					href="#"
					next
					onClick={(e) => onPageClick(e, page + 1)}
				/>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink
					href="#"
					last
					onClick={(e) => onPageClick(e, maxPage)}
				/>
			</PaginationItem>
		</Pagination>
	);
};

export default PostPagination;
