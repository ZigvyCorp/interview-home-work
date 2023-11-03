import { Avatar } from 'antd';
import dayjs from 'dayjs';
import { IComment, IUser } from '../../interfaces';

type Props = IComment;

const CommentItem = ({ commentedAt, content, user }: Props) => {
  const _user = user as IUser;
  const name = _user.name;
  const avatar = name.slice(0, 1);

  return (
    <div
      className="comment-item-wrapper"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        columnGap: '1rem',
      }}
    >
      <Avatar>{avatar}</Avatar>

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '.5rem',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontSize: '12px',
              color: 'lightgray',
            }}
          >
            {dayjs(commentedAt).format('DD/MM/YYYY')}
          </span>
        </div>
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default CommentItem;
