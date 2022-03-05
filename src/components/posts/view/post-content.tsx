import { Col, Row, Space, Typography } from "antd"
import classNames from "classnames"
import moment from "moment"
import React from "react"
import { useNavigate } from "react-router"
import { PostModel } from "../../../models/post"
import CustomCollapse from "../../../shared/collapse/collapse"
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from "../../../utils/route-path"
import ViewComments from "./comment"

const { Title, Paragraph, Text } = Typography

interface IViewPostContentProps {
	item: PostModel
	isDetail?: boolean
}

const ViewPostContent = (props: IViewPostContentProps) => {
	const { item, isDetail } = props
	const navigate = useNavigate()

	const handleRedirectToPostDetail = (postId: number) => {
		if (isDetail) return

		navigate(ROUTE_PATHS.PostDetail.replace(ROUTE_DYNAMIC_VARIABLE.id, postId.toString()))
	}

	return (
		<>
			<Title
				level={3}
				children={item.title}
				className={classNames("text-center", !isDetail && "cur")}
				onClick={() => handleRedirectToPostDetail(item.id)}
			/>
			<Space direction='vertical' size={20} className='font-medium w-100'>
				<Row gutter={[0, 5]}>
					<Col span={24} className=''>{`Author: ${item.name}`}</Col>
					<Col span={24}>{`Created at: ${moment(item.createdAt).format("LL")}`}</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Paragraph ellipsis={!isDetail ? { rows: 2, expandable: false } : undefined}>{item.body}</Paragraph>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<CustomCollapse
							id={item.id}
							header={<Text type='secondary'>{`${item.comments?.length || 0} replies`}</Text>}
							children={<ViewComments comments={item.comments || []} />}
							disabled={!item.comments || item.comments.length === 0 || isDetail}
							isOpen={isDetail}
						/>
					</Col>
				</Row>
			</Space>
		</>
	)
}

export default ViewPostContent
