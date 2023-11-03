import { Flex, Typography, Space, Tag, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBlog } from '../../slices/blog/blog.action';
import { SelectorBlog } from '../../slices/blog/blog.selector';
import dayjs from 'dayjs';
import { IComment, IUser } from '../../interfaces';
import { useParams } from 'react-router';
import CommentSection from '../../components/CommentSection';
import { Tags_Color } from '../../constants';

const { Paragraph } = Typography;

type Props = {};

const Detail = (props: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector(SelectorBlog.detail);
  const detailLoading = useSelector(SelectorBlog.detailLoading);

  const fetchData = () => {
    dispatch(
      ActionBlog.RequestDetail({
        id: id as string,
      })
    );
  };

  const tagColor = (index: number) => {
    const length = Tags_Color.length;
    return Tags_Color[index % length];
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (detailLoading)
    return (
      <Flex
        justify="center"
        align="center"
        style={{
          height: '300px',
        }}
      >
        <Spin size="large" />
      </Flex>
    );

  return (
    <div
      style={{
        padding: '50px 1rem',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>{detail?.title}</h1>

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
                marginBottom: '.5rem',
              }}
            >
              <strong>Author:</strong> {(detail?.author as IUser)?.name}
            </p>
            <p>
              <strong>Created at:</strong>{' '}
              {dayjs(detail?.postedAt).format('MMM DD, YYYY')}
            </p>
          </div>

          <Space>
            {detail?.tags.map((tag, index) => (
              <Tag color={tagColor(index)} key={index}>
                {tag}
              </Tag>
            ))}
          </Space>
        </Flex>

        <Paragraph>{detail?.content}</Paragraph>

        <CommentSection
          show
          count={detail?.commentCount}
          comments={detail?.comments as IComment[]}
        />
      </div>
    </div>
  );
};

export default Detail;
