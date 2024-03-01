import { useEffect, type FC, useState } from 'react'
import Post from 'modules/Post'
import { Loading, Text } from 'components'
import { TPost } from 'types/post'
import { getPostById } from 'api/post'
import { Link, useParams } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

const BlogPage: FC = () => {
    const params = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [post, setPost] = useState<TPost | null>(null)

    useEffect(() => {
        (async () => {
            if (params?.id) {
                const data = await getPostById(params.id)
                if (!data?.data) {
                    setIsLoading(false)
                    return
                }
                setIsLoading(() => {
                    setPost(data.data)
                    return false
                })
            }
        })()
    }, [])

    return (
        <>
            <Link to={'/'} style={{ all: 'unset', cursor: 'pointer' }}>
                <Text
                    fontSize={16} fontWeight={600}
                    className='text-blue-600 cursor-pointer'
                >
                    <LeftOutlined /> Go to home page
                </Text>
            </Link>
            {post ? <Post post={post} hasLink={false} /> : null}
            {isLoading ? <Loading size='large' /> : null}
        </>
    )
}

export default BlogPage
