import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'
import { fetchPost } from '../redux/action'
export default function HomePage() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(window.location.search)
    const page = searchParams.get('page') || 1
    const [listPost, setListPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(page)
    const itemPerPage = 10
    const totalItems = posts.length
    const totalPage = Math.ceil(totalItems / itemPerPage)

    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage

    useEffect(() => {
        dispatch(fetchPost())
        const data = posts.slice(startIndex, endIndex)
        setListPosts(data)
    }, [currentPage])

    useEffect(() => {
        const data = posts.slice(startIndex, endIndex)
        setListPosts(data)
    }, [posts])

    const handleChangePage = (page) => {
        navigate(`/?page=${page}`)
        setCurrentPage(page)
    }

    return (
        <>
            <Header />
            <div className="container d-flex flex-wrap gap-2 mt-4 post--list">
                {listPost.map((post, index) => (
                    <PostItem data={post} key={index} />
                ))}
            </div>
            <div className="container d-flex justify-content-center">
                <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handleChangePage} />
            </div>
        </>
    )
}
