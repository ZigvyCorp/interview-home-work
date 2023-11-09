import { Card, Skeleton } from 'antd'
import { postApi } from 'api'
import { TitlePage } from 'components/toast/global'
import { MainLayout } from 'components/toast/global/Layout/mainLayouts'
import { PageName } from 'config/displayNameConfig'
import { useRouter } from 'next/router'
import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from 'react-query'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { getPostDetailRedux } from 'store/postDetail/postDetailSlice'
import { _format } from '../util/index'
const details = () => {
	const dispatch = useAppDispatch()
	const { back, query } = useRouter()
	const postDetail = useAppSelector((state) => state.postDetailSlice.postDetail)

	const postId = query.postId
	const { body, createdAt, email, name, postId: postIdDetail, __v, _id } = postDetail
	const {
		data: postDetailData,
		refetch,
		isLoading: isLoadingPawnDetail
	} = useQuery(
		[`PawnId-${postId}`],
		() =>
			postApi.getByID(postId as string).then((res) => {
				dispatch(getPostDetailRedux(res?.post))
				return res
			}),
		{
			refetchOnWindowFocus: false,
			enabled: Boolean(postId)
		}
	)

	return (
		<div className="">
			<div className="">
				<TitlePage title={`Detail PostId ${postId || ''}`} hideAddBtn={true} back={true} onBack={back} />
			</div>

			<div className="bgContainer flex items-center justify-center">
				<div className="w-[500px]">
					<Card title={_id}>
						<Skeleton loading={isLoadingPawnDetail || !postDetail} active>
							<h2>Name: {name}</h2>
							<p>Body: {body}</p>
							<p>Email: {email}</p>
							<p>Post ID: {postIdDetail}</p>
							<p>Created At: {_format.getShortVNDate(createdAt)}</p>
						</Skeleton>
					</Card>
				</div>
			</div>
			<div></div>
		</div>
	)
}
details.Layout = MainLayout
details.displayName = PageName.post.listPost
export default details
