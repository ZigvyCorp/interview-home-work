import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { homeActions } from '../redux/home/slice';
import PostItem from '../components/Post/PostItem';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../layout/Header';
import { useSearchParams } from 'react-router-dom';
import { persistor } from '../redux/store';
import { ScrollTop } from 'primereact/scrolltop';

const TAKE = 10;

function Home(): JSX.Element {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';

  const {
    data,
    meta,
    isLoading,
    search: previosSearch,
  } = useAppSelector((state) => state.home);

  const hasMore = useMemo(
    () => !!(meta != null && data != null && meta.total > data.length),
    [data],
  );

  const getData = (): void => {
    dispatch(homeActions.getPosts({ page: 1, take: TAKE, search }));
  };

  const loadMoreData = (): void => {
    dispatch(
      homeActions.getPosts({
        page: (data?.length ?? 0) / TAKE + 1,
        take: TAKE,
        search,
      }),
    );
  };

  useEffect(() => {
    if (data == null) {
      getData();
    }
    if (previosSearch !== search) {
      dispatch(homeActions.resetData());
      void persistor.purge();
      getData();
    }
  }, [search]);
  return (
    <Header>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMoreData}
        hasMore={hasMore && !isLoading}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div
          className="flex flex-column align-items-center gap-2"
          style={{ paddingTop: '6.5rem' }}
        >
          {data?.map((postItem) => (
            <div key={postItem.id} className="w-9">
              <PostItem {...postItem} />
            </div>
          ))}
          {data?.length === 0 && <h1 className="mt-8">No post found!</h1>}
        </div>
      </InfiniteScroll>
      <ScrollTop
        threshold={100}
        className="p-scrolltop-custom"
        icon="pi pi-arrow-up"
      />
    </Header>
  );
}

export default Home;
