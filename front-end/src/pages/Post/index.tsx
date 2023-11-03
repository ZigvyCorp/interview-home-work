import { Pagination, PaginationProps } from 'antd';
import PostView from '../../components/Post/ListPost';
import fakedata from '../../constants/Fakedata.json';
import { useAppSelector } from '../../hooks/useAppSelector';

const Post = () => {
  const data = useAppSelector((state) => state);
  const posts = data.post.posts

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onChange = (page: number, pageSize: number) => {
    console.log({page, pageSize});
    
  }

  return (
    <div className='w-full'>
      <PostView posts={fakedata.posts} />
      <Pagination
        className='flex-center'
        showSizeChanger={false}
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        onChange={onChange}
      />
    </div>
  )
}

export default Post