import { Avatar, List } from 'antd';
import { dayjsInstance } from '../../../../../core/dayjs';
import { ICommentModel } from '../../../../../interfaces';

type Props = {
  comment: ICommentModel;
};

const CommentItem = (props: Props) => {
  const { comment } = props;

  const dateObject = dayjsInstance(comment?.created_at).utc().tz('UTC');

  const relativeTime = dateObject.fromNow();

  const timeStamp = relativeTime;
  return (
    <List.Item key={comment.email}>
      <List.Item.Meta
        avatar={<Avatar src={''} />}
        title={
          <div className='flex gap-4 items-end'>
            <a href='#'>{comment.name}</a>
            <span className='text-black/40 text-xs'>{timeStamp}</span>
          </div>
        }
        description={comment.body}
      />
    </List.Item>
  );
};

export default CommentItem;
