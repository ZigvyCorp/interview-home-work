import { CommentResponse } from '../../../interfaces/response/CommentResponse';
import LineBreak from '../../LineBreak';
import SingleComment from './SingleComment';

interface AllCommentsProps {
  comments: CommentResponse[]
}

const AllComments: React.FC<AllCommentsProps> = (props) => {

  const { comments } = props

  return (
    <div className='max-h-[350px] overflow-y-auto'>
      <LineBreak className='mb-6'/>
      {comments.map((comment, index) => <SingleComment key={index} index={index} data={comment} size={comments.length} />)}
    </div>
  )
}

export default AllComments