import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBlog } from '../../slices/blog/blog.action';
import { SelectorBlog } from '../../slices/blog/blog.selector';
import { Flex, Input, List } from 'antd';
import { useDebounce } from '../../utils/useDebounce';
import BlogItem from '../../components/BlogItem';
import { SearchOutlined } from '@ant-design/icons';

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  const list = useSelector(SelectorBlog.list);
  const loading = useSelector(SelectorBlog.loading);
  const { limit, skip, total } = useSelector(SelectorBlog.paging);
  const textSearch = useSelector(SelectorBlog.textSearch);

  const fetchData = (textSearch: string = '', limit: number, skip: number) => {
    dispatch(
      ActionBlog.RequestList({
        body: {
          textSearch,
          paging: {
            limit,
            skip,
          },
        },
      })
    );
  };

  useEffect(() => {
    fetchData(textSearch, limit, skip);
  }, []);

  const handleSearchBlog: React.ChangeEventHandler<HTMLInputElement> =
    useDebounce((e) => {
      const value = e.target.value;

      fetchData(value, limit, skip);
    });

  return (
    <div
      style={{
        padding: '50px 1rem',
      }}
    >
      <Flex vertical gap={20}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search blog ..."
          onChange={handleSearchBlog}
        />
        <List
          itemLayout="vertical"
          size="large"
          loading={loading}
          pagination={{
            showTitle: true,
            onChange: (page) => {
              const _skip = (page - 1) * limit;
              fetchData(textSearch, limit, _skip);
            },
            total,
            pageSize: limit,
          }}
          split={false}
          dataSource={list}
          renderItem={(item) => (
            <List.Item key={item.id} className="blog-item-wrapper">
              <BlogItem {...item} />
            </List.Item>
          )}
        />
      </Flex>
    </div>
  );
};

export default HomePage;
