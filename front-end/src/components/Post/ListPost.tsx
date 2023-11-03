import { Pagination, PaginationProps } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAllPosts } from '../../redux/actions/postAction';
import SinglePost from './SinglePost';

const PAGE_SIZE_OPTIONS = [5, 10, 15, 20, 30, 40, 50];

const ListPost = () => {

    const dispatch = useDispatch();

    const [pageSize, setPageSize] = useState(5);
    const [pageIndex, setPageIndex] = useState<number>(1);

    const { posts, count } = useAppSelector((state) => state.post);

    const fetchData = () => {
        dispatch(getAllPosts({ page: pageIndex, pageSize: pageSize }));
    }

    const onChange = (page: number) => {
        setPageIndex(page);
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setPageSize(pageSize)
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageIndex, pageSize])

    return (
        <>
            {posts.map(post => <SinglePost key={post.id} data={post} />)}
            <Pagination
                className='flex-center'
                showSizeChanger
                defaultCurrent={1}
                onChange={onChange}
                onShowSizeChange={onShowSizeChange}
                total={count}
                pageSizeOptions={PAGE_SIZE_OPTIONS}
            />
        </>
    )
}

export default ListPost 