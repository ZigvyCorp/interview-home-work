import { Input, List, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'
import { getPostsStart } from '../redux/features/postSlice'
import { useLoading } from '../hooks/useLoading'
import { getPosts } from '../services/postServices'

export default function Home() {
	const dispatch = useDispatch()
	const { list: posts, totalCount, loading } = useSelector(state => state.posts)
	const [title, setTitle] = useState('')
	const [searchResult, setSearchResult] = useState({
		posts: [],
		totalCount: 0,
	})

	const [handleSearch, isLoadingSearch] = useLoading(
		async title => {
			const res = await getPosts(searchResult.posts.length || 0, 10, title)

			setSearchResult(prev => ({
				posts: [...prev.posts, ...res.posts],
				totalCount: res.totalCount,
			}))
		},
		[searchResult],
	)

	const loadMoreData = () => {
		if (loading || isLoadingSearch) {
			return
		}
		if (title !== '') {
			handleSearch(title)
			return
		}

		dispatch(
			getPostsStart({
				skip: posts.length,
				limit: 10,
				title: '',
			}),
		)
	}

	useEffect(() => {
		loadMoreData()
	}, [dispatch])

	useEffect(() => {
		if (title === '') {
			setSearchResult({
				posts: [],
				totalCount: 0,
			})
		}
	}, [title])

	return (
		<div>
			<Input
				placeholder="Search with title"
				value={title}
				onChange={async e => {
					setTitle(e.target.value)
					handleSearch(e.target.value)
				}}
			/>
			<InfiniteScroll
				dataLength={title !== '' ? searchResult.posts : posts}
				next={loadMoreData}
				hasMore={title !== '' ? searchResult.posts.length < searchResult.totalCount : posts.length < totalCount}
				loader={<Skeleton paragraph={{ rows: 5 }} active />}
				scrollableTarget="scrollableDiv"
			>
				<List
					dataSource={title !== '' ? searchResult.posts : posts}
					loading={loading || isLoadingSearch}
					renderItem={post => (
						<Post
							postId={post.id}
							title={post.title}
							content={post.body}
							author={post.user.name}
							comments={post.comments}
						/>
					)}
				/>
			</InfiniteScroll>
		</div>
	)
}
