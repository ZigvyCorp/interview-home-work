import { List } from "antd"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommentsAction, getPostAction } from "../../redux/post/post.action"
import { PostState } from "../../redux/post/post.reducer"
import { AppStates } from "../../redux/type"
import "./posts.scss"
import ViewPostContent from "./view/post-content"

interface IPostsProps {}

const Posts = (props: IPostsProps) => {
	const dispatch = useDispatch()
	const { posts, keyword } = useSelector<AppStates, PostState>((state) => state.postState)
	const [currentPage, setCurrentPage] = useState(1)
	const [pageSize, setPageSize] = useState(5)

	useEffect(() => {
		if (posts.length === 0) dispatch(getPostAction())
	}, [])

	useEffect(() => {
		if (posts.length > 0) {
			handleGetComments()
		}
	}, [currentPage, posts.length, pageSize, keyword])

	const handleGetComments = () => {
		const takeFrom = (currentPage - 1) * pageSize
		const postIds = posts
			.filter((post) => !keyword || post.title.includes(keyword))
			.slice(takeFrom, pageSize * currentPage)
			.filter((post) => !post.comments)
			.map((post) => post.id)

		postIds.forEach((id) => {
			dispatch(getCommentsAction(id))
		})
	}

	return (
		<List
			className='list-post'
			itemLayout='vertical'
			size='large'
			pagination={{
				onChange: (page, pageSize) => {
					setCurrentPage(page)
					setPageSize(pageSize)
				},
				pageSize: pageSize,
			}}
			dataSource={posts.filter((post) => !keyword || post.title.includes(keyword))}
			renderItem={(item) => (
				<List.Item key={item.id}>
					<ViewPostContent item={item} />
				</List.Item>
			)}
		/>
	)
}

export default Posts
