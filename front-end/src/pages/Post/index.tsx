import { Skeleton } from 'antd';
import { Suspense, lazy } from 'react';

const ListPost = lazy(() =>import('../../components/Post/ListPost'));

const Post = () => {
  return (
    <div className='w-full'>
      <Suspense fallback={<Skeleton />}>
        <ListPost />
      </Suspense>
    </div>
  )
}

export default Post