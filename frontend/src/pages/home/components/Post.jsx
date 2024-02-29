import {
	Card,
	Col,
	Collapse,
	Descriptions,
	Row,
	Space,
	Tag,
	Typography,
} from "antd";
import { Comment } from "./Comment";
import { getWords } from "../../../utils";

const colors = [
	"magenta",
	"red",
	"volcano",
	"orange",
	"gold",
	"lime",
	"green",
	"cyan",
	"blue",
	"geekblue",
	"purple",
];

const labelStyle = {
	fontSize: "1.25rem",
	lineHeight: "1.75rem",
};

export const Post = ({post}) => {
	return (
		<Card
			title={post.title}
			classNames={{
				header: "!border-none !font-semibold text-center !text-3xl mt-4",
			}}>
			<Row gutter={[0, 24]}>
				<Col span={8}>
					<Descriptions
						labelStyle={labelStyle}
						contentStyle={labelStyle}
						column={1}>
						<Descriptions.Item label="Author">{post.user.name}</Descriptions.Item>
						<Descriptions.Item label="Created at">
							Sep 20, 2018
						</Descriptions.Item>
					</Descriptions>
				</Col>
				<Col span={8}></Col>
				<Col span={8}>
					<Space wrap size={[0, 8]}>
						{post.tags.map((tag, index) => (
							<Tag key={index} color={colors[index]}>
								#{tag}
							</Tag>
						))}
					</Space>
				</Col>
				<Col span={24}>
					<Typography.Paragraph className="text-lg text-justify !mb-0">
						{getWords(post.body, 100)}
					</Typography.Paragraph>
				</Col>
				<Col span={24}>
					<Collapse bordered={false} className="!border-b">
						<Collapse.Panel key={1} header={`${post.comments.length} replies`}>
							{post.comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
						</Collapse.Panel>
					</Collapse>
				</Col>
			</Row>
		</Card>
	);
};
