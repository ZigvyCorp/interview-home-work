import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import LayoutDefault from "../../components/LayoutDefault";
import PostItem from "./PostItem";
import { selectPostState, getPostsAsync } from '../../stores/posts'
import { useEffect, useState } from 'react';

function Post() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostState);
  const limit = 3;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(getPostsAsync({ limit, offset }));
  }, [offset])

  if(posts.status === 'loading') {
    return (
      <LayoutDefault>
        <div style={{textAlign: "center"}}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} />
        </div>
    </LayoutDefault>
    );
  }

  return (
    <LayoutDefault>
      {posts.value.data.map(item => <PostItem title={item.title} content={item.content} tags={item.tags} owener={item.owener} comments={item.comments} />)}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Pagination defaultCurrent={(offset / limit) + 1} total={posts.value.length} pageSize={limit} onChange={(page) => {
          setOffset((page - 1) * limit);
        }} />
      </div>

    </LayoutDefault>
  );
}

export default Post;
