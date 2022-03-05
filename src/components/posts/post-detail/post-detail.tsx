import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { PostModel } from "../../../models/post"
import { AppStates } from "../../../redux/type"
import ViewPostContent from "../view/post-content"
import "./post-detail.scss"

interface IPostsProps {}

const PostDetails = (props: IPostsProps) => {
	const param = useParams<{ id: string }>()
	const posts = useSelector<AppStates, PostModel[]>((state) => state.postState.posts)
	const [postDetail, setPostDetail] = useState<PostModel>()

	useEffect(() => {
		const _post = posts.find((post) => post.id === Number(param.id))
		if (_post) setPostDetail(_post)
	}, [])

	return (
		<Row className='post-detail'>
			<Col span={24}>{postDetail && <ViewPostContent item={postDetail} isDetail={true} />}</Col>
		</Row>
	)
}

export default PostDetails
