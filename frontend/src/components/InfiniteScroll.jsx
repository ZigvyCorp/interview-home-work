import { useEffect, useRef } from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const InfiniteScroll = ({
	children,
	loader,
	loading,
	className,
	fetchMore,
	hasMore,
	dataLength

}) => {
	const pageEndRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore && !loading) {
					fetchMore();
				}
			},
			{ threshold: 0.8 }
		);

		if (pageEndRef.current) {
			observer.observe(pageEndRef.current);
		}

		return () => {
			if (pageEndRef.current) {
				observer.unobserve(pageEndRef.current);
			}
		};
	}, [pageEndRef, hasMore]);

	return (
		<div className={className}>
			{children}
			{!hasMore && dataLength && (
				<Result
					icon={<SmileOutlined />}
					title="Great, you have read all posts !!!"
				/>
			)}
			{<div ref={pageEndRef}>{loading && loader}</div>}
		</div>
	);
};
