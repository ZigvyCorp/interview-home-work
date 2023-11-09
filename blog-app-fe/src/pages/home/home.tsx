import React, { Fragment, useEffect, useState } from "react";
import Post from "../../components/post/post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectPosts, selectSearchPerformed, selectTotal } from "../../redux/reducers/postSlice";
import { clearPosts, fetchPostsRequest, performSearch } from "../../redux/actions/postAction";
import { Flex, Pagination, Input } from "antd";
import styles from "./home.module.css";
import { SearchProps } from "antd/es/input";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

export default function Home() {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	searchParams.get("search");

	const pageSize = 3;

	const posts = useAppSelector(selectPosts);
	const searchPerformed = useAppSelector(selectSearchPerformed);
	const total = useAppSelector(selectTotal);

	const [page, setPage] = useState(0);

	const handlePageChange = (nextPage: number) => {
		const nextIndex = nextPage * pageSize;

		if (posts.length < nextIndex && posts.length !== total) {
			dispatch(
				fetchPostsRequest({
					limit: pageSize,
					page: nextPage - 1,
					search: searchParams.get("search") || "",
				})
			);
		}

		setPage(nextPage - 1);
	};

	const handleSearch: SearchProps["onSearch"] = (value) => {
		setSearchParams({ search: value });

		dispatch(clearPosts());

		dispatch(performSearch());

		dispatch(fetchPostsRequest({ limit: pageSize, page: 0, search: value }));
	};

	useEffect(() => {
		if (posts.length === 0 && !searchPerformed) {
			dispatch(fetchPostsRequest({ limit: pageSize, page }));
		}
		setPage(0);
	}, [searchPerformed]);

	return (
		<Flex vertical gap="large">
			<Flex justify="center">
				<Search onSearch={handleSearch} placeholder="input search text" className={styles.search} />
			</Flex>
			{posts.length > 0 ? (
				<Fragment>
					<div>
						{posts.slice(page * pageSize, (page + 1) * pageSize).map((p) => (
							<Post post={p} key={p.id} />
						))}
					</div>
					<Flex justify="center">
						<Pagination onChange={handlePageChange} simple total={total} pageSize={pageSize} />
					</Flex>
				</Fragment>
			) : (
				<p>No data</p>
			)}
		</Flex>
	);
}
