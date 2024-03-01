import { useState, type FC, useEffect } from 'react'
import Post from 'modules/Post'
import { Container, Loading, Search } from 'components'
import { Pagination as AntdPagination, ConfigProvider as AntdConfigProvider } from 'antd'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { getPostsStart, setCurrentPage } from 'store/post/slice'
import { PER_PAGE } from 'constant'
import { calcStart } from 'utils'

const HomePage: FC = () => {
    const dispatch = useAppDispatch()
    const { posts, page, total, isLoading } = useAppSelector(state => state.post)
    const [search, setSearch] = useState<string>('')

    const handleChangePage = (page: number, perPage: number) => {
        dispatch(setCurrentPage(page))

        const start = calcStart(page, perPage)
        const limit = perPage
        if (!posts[page]) {
            dispatch(getPostsStart({
                start,
                limit
            }))
        }
    }

    useEffect(() => {
        handleChangePage(1, PER_PAGE)
    }, [])

    const PostSearch = (
        <Search
            fontSize={18}
            placeholder='search by post title'
            onSearch={(value: string) => setSearch(value)}
        />
    )

    const render = posts[page] ? posts[page]
        .filter(post => post.title.includes(search))
        .map((post, index) => (
            <Post post={post} key={index} />
        )) : null

    const Pagination = (
        <AntdConfigProvider theme={{ token: { colorPrimary: '#000' } }}>
            <AntdPagination
                defaultCurrent={page}
                total={total}
                defaultPageSize={PER_PAGE}
                showSizeChanger={false}
                onChange={handleChangePage}
                className='flex justify-end mt-4'
            />
        </AntdConfigProvider>
    )

    return (
        <Container className='p-4'>
            {PostSearch}
            {render}
            {isLoading ? <Loading size='large' /> : null}
            {Pagination}
        </Container>
    )
}

export default HomePage
