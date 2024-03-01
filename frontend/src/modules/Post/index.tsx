import { Col, Row, Space, Tag } from 'antd'
import { Paragraph, Text, Title } from 'components'
import { useState, type FC } from 'react'
import Comments from './Comment'
import { TPost } from 'types/post'
import moment from 'moment'
import { Link } from 'react-router-dom'

interface IProps {
    post: TPost,
    hasLink?: boolean
}

const Post: FC<IProps> = ({
    post,
    hasLink = true
}) => {
    const [ellipsis, setEllipsis] = useState<boolean>(true)

    const PostTitle = (
        <Col span={24} className='text-center'>
            <Title level={1}>{post.title}</Title>
        </Col>
    )

    const PostDetail = hasLink ? (
        <Link to={`/blog/${post.id}`} style={{ all: 'unset', cursor: 'pointer' }}>
            <Text
                fontSize={14} fontWeight={600}
                className='text-blue-600 cursor-pointer'
            >
                Go to detail
            </Text>
        </Link>
    ) : null

    const PostAuthor = (
        <Col span={24}>
            <Row justify='space-between' gutter={[0, 16]}>
                <Col>
                    <Space size={8} direction='vertical'>
                        <Text fontSize={18} fontWeight={600}>
                            Author: {post.author}
                        </Text>
                        <Text fontSize={18} fontWeight={600}>
                            Created at: {moment().format("MMM DD, YYYY")}
                        </Text>
                    </Space>
                </Col>
                <Col>
                    <Space size={[0, 8]} wrap>
                        <Tag>Tag 1</Tag>
                        <Tag>Tag 2</Tag>
                        <Tag>Tag 3</Tag>
                        {PostDetail}
                    </Space>
                </Col>
            </Row>
        </Col>
    )

    const PostDescription = (
        <Col span={24}>
            <Paragraph fontSize={16} fontWeight={600}>
                {ellipsis ? post.body.substring(0, 100).concat('...') : post.body}
                {' '}
                {ellipsis
                    ? <Text fontSize={14} fontWeight={600} className='text-blue-600 cursor-pointer' onClick={() => setEllipsis(false)}>More</Text>
                    : <Text fontSize={14} fontWeight={600} className='text-blue-600 cursor-pointer' onClick={() => setEllipsis(true)}>Collapse</Text>}
            </Paragraph>
        </Col>
    )

    const PostComments = (
        <Col span={24}>
            <Comments postId={post.id} />
        </Col>
    )

    return (
        <Row gutter={[0, 16]}>
            {PostTitle}
            {PostAuthor}
            {PostDescription}
            {PostComments}
        </Row>
    )
}

export default Post
