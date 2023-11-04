import { Card, Tag } from 'antd'
import { PresetColors } from 'antd/es/theme/internal'
import React from 'react'
import { PostResponse } from '../../interfaces/response/PostResponse'
import { randomArrayValue } from '../../utils/ArrayUtils'
import { timeConverter } from '../../utils/DatetimeUtil'
import CommentContainer from './Comment/CommentContainer'
import { Link } from 'react-router-dom'
import { getPresetColors } from '../../utils/CommonUtil'

interface ISinglePostProps {
  data: PostResponse
}
const SinglePost: React.FC<ISinglePostProps> = (props) => {
  const { data } = props

  return (
    <Card
      title={data.title}
      bordered
      className='mb-4'
      extra={<Link to={`/post/${data.id}`} className='font-semibold hover:text-primary'>More</Link>}
    >
      <div className='flex justify-between'>
        <div className='md:basis-3/4 basis-3/5'>
          <p>
            <span className='font-semibold'>Author</span>: {data.ownerName}
          </p>
          <p>
            <span className='font-semibold'>Created at</span>: {timeConverter(data.createdAt)}
          </p>
        </div>
        <div className='flex flex-wrap justify-end lg:w-2/5 md:basis-1/4'>
          {data.tags.map((tag, index) => <Tag key={index} color={randomArrayValue<string>(getPresetColors())} className='self-start my-1'>{tag}</Tag>)}
        </div>
      </div>
      <div className='py-4'>
        <p className='text-[15px]'>{data.content.short(100)}</p>
      </div>
      <CommentContainer post={data} />
    </Card>
  )
}

export default SinglePost