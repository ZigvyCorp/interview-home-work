import { Avatar, Col, List, Row, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATE_STRING_FORMAT, DateJS } from '../../core/dayjs';
import { ActionApp } from '../../stores/redux/app.action';
import { SelectorApp } from '../../stores/redux/app.selector';
import CommentSection from './components/CommentSection';
import ListPagination from './components/Pagination';
import TextSearch from './components/TextSearch';

type Props = {};

const PostModule = (props: Props) => {
  const posts = useSelector(SelectorApp.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionApp.RequestGetPosts({ limit: 10, page: 1 }));
  }, []);

  return (
    <>
      <TextSearch />
      <div
        id='scrollableDiv'
        className='min-h-[calc(100vh-216px)] max-h-[calc(100vh-216px)] overflow-auto px-16 bg-white rounded'
      >
        <List
          dataSource={posts}
          renderItem={(post, index) => (
            <List.Item key={post?.id}>
              <Row className='w-full'>
                <Col span={24} className='text-center'>
                  <Typography.Title>{post?.title}</Typography.Title>
                </Col>
                <Col span={24}>
                  <List.Item.Meta
                    avatar={<Avatar src={''} />}
                    title={
                      <div className='flex flex-col'>
                        <a href='#'>{post.author}</a>
                        <span className='text-black/40 text-xs'>
                          {DateJS.getFormatDate(
                            post.created_at,
                            DATE_STRING_FORMAT
                          )}
                        </span>
                      </div>
                    }
                  />
                </Col>
                <Col span={24}>
                  <Paragraph
                    ellipsis={{
                      rows: 2,
                      expandable: true,
                      symbol: 'See more',
                      tooltip: post?.content,
                    }}
                  >
                    {post?.content}
                  </Paragraph>
                </Col>
                {post?.comments?.count ? (
                  <Col span={24}>
                    <CommentSection
                      postId={post?.id.toString()}
                      comments={post?.comments}
                    />
                  </Col>
                ) : null}
              </Row>
            </List.Item>
          )}
        />
      </div>
      <ListPagination />
    </>
  );
};

export default PostModule;
