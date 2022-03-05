import { Avatar, List, Space, Typography } from "antd"
import moment from "moment"
import React from "react"
import { CommentModel } from "../../../models/comment"

const { Text } = Typography

interface ICommentsProps {
	comments: CommentModel[]
}

const ViewComments = (props: ICommentsProps) => {
	const { comments } = props

	return (
		<List
			itemLayout='horizontal'
			dataSource={comments}
			renderItem={(item) => (
				<List.Item key={item.id}>
					<List.Item.Meta
						avatar={<Avatar src='https://i.pinimg.com/564x/86/f9/6f/86f96f7db6d065027396dbad3c446251.jpg' />}
						title={
							<Space size={12}>
								<Text type='secondary'>{item.name}</Text>
								<Text type='secondary'>{moment().add("d", -1).fromNow()}</Text>
							</Space>
						}
						description={<Text className='description'>{item.body}</Text>}
					/>
				</List.Item>
			)}
		/>
	)
}

export default ViewComments
