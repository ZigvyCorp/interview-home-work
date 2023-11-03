import { Card, Tag } from 'antd'
import { PresetColors } from 'antd/es/theme/internal'
import React from 'react'
import { PostResponse } from '../../interfaces/response/PostResponse'
import { randomArrayValue } from '../../utils/CommonUtil'
import { timeConverter } from '../../utils/DatetimeUtil'
import CommentContainer from './Comment/CommentContainer'

interface ISinglePostProps {
  data: PostResponse
}

const SinglePost: React.FC<ISinglePostProps> = (props) => {

  const { data } = props

  const presetColors: string[] = PresetColors.map(color => color);

  return (
    <Card title={data.title} bordered className='mb-4'>
      <div className='flex justify-between'>
        <div className='md:basis-3/4 basis-3/5'>
          <p>
            <span className='font-semibold'>Author</span>: {data.ownerName}</p>
          <p>
            <span className='font-semibold'>Created at</span>: {timeConverter(data.createdAt)}</p>
        </div>
        <div className='flex flex-wrap lg:w-2/5 md:basis-1/4'>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
          <Tag color={randomArrayValue<string>(presetColors)} className='self-start my-1'>Magenta</Tag>
        </div>
      </div>
      <div className='py-4'>
        <p className='text-[15px]'>{data.content.short(100)}</p>
      </div>
      <CommentContainer comments={data.comments}/>
    </Card>
  )
}

export default SinglePost