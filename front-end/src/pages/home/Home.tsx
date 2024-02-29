import React from 'react'
import { IPost } from '../../type/IPost'
import { Space, Pagination } from 'antd'
import PostContent from '../../components/PostContent';

import { selectAllPost, onPage,selectTotalPage, selectCurrentPage, selectSearchQuery } from '../../features/posts/postsSlice';

import { useDispatch, useSelector } from 'react-redux';


import Search from '../../components/Search';

export default function Home()
{
    const [filterPost, setFilterPost]=React.useState<IPost[]>([] as IPost[])
    const posts:IPost[]= useSelector(selectAllPost)
    const currentPage:number=useSelector(selectCurrentPage)
    const totalPage:number=useSelector(selectTotalPage)
    const currentPosts:IPost[]=posts.slice((currentPage-1)*2,currentPage*2)
    const searchQuery:string=useSelector(selectSearchQuery)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        const filtered = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilterPost(filtered);
    },[searchQuery])

    return (
        <Space  direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Search/>
            {
                currentPosts ? (
                    filterPost.length < totalPage && filterPost.length>0 ? (
                      filterPost.map(post => (
                        <PostContent key={post.id} post={post}/>
                      ))
                    ) : (
                      currentPosts.map(post => (
                        <PostContent key={post.id} post={post}/>
                      ))
                    )
                  ) : (
                    null
                  )
                
            }
            {
                filterPost.length<totalPage?null: <Pagination  defaultCurrent={1} total={totalPage} onChange={(page, pageSize)=>{dispatch(onPage(page))}} style={{display:'flex', justifyContent:'center'}}/>
            }
        </Space>
    )
}