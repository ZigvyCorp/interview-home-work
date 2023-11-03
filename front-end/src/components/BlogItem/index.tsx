import { Flex, Space, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { IBlog, IComment, IUser } from '../../interfaces';
import { Link } from 'react-router-dom';
import CommentSection from '../CommentSection';
import { Tags_Color } from '../../constants';

const { Paragraph } = Typography;

type Props = IBlog;

const BlogItem = ({
  author,
  content,
  tags,
  title,
  commentCount,
  comments,
  postedAt,
  id,
}: Props) => {
  const tagColor = (index: number) => {
    const length = Tags_Color.length;
    return Tags_Color[index % length];
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <Link to={`/blog/${id}`} style={{ color: 'black' }}>
          {title}
        </Link>
      </h1>

      <Flex
        justify="space-between"
        align="flex-start"
        style={{
          margin: '1rem 0',
        }}
      >
        <div className="">
          <p
            style={{
              marginBottom: '.1rem',
            }}
          >
            <strong>Author:</strong> {(author as IUser).name}
          </p>
          <p>
            <strong>Created at:</strong>{' '}
            {dayjs(postedAt).format('MMM DD, YYYY')}
          </p>
        </div>

        <Space>
          {tags.map((tag, index) => (
            <Tag key={index} color={tagColor(index)}>
              {tag}
            </Tag>
          ))}
        </Space>
      </Flex>

      <Paragraph
      // ellipsis={{
      //   rows: 2,
      // }}
      >
        {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        {/* {content} */}
      </Paragraph>

      <CommentSection count={commentCount} comments={comments as IComment[]} />
    </div>
  );
};

export default BlogItem;
