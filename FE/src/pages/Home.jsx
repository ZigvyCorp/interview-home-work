import { useDispatch, useSelector } from "react-redux"
import { Posts } from "../components/ui/Posts"
import { useEffect } from "react"
import { getPostsFetch } from "../store/postsSlice/slice"

const Home = () => {
    const dispatch = useDispatch()
    const isSearched = useSelector(state => state.posts.isSearched)
    let posts = useSelector(state => state.posts.posts)
    let searchPost = useSelector(state => state.posts.searchRes)
    let list = [...posts]

    useEffect(() => {
        dispatch(getPostsFetch())
    }, [dispatch])

    if (isSearched) {
        list = searchPost
        if(list.length === 0) {
            return <div className="text-center"> Khong tim thay </div>
        } 
    }


        return (
            list.map(post => {
                const des = post.content?.slice(0, 100)
                const date = new Date(post.created_at)
                return (
                    <div key={post.id}>
                        <Posts title={post.title} createdDate={date.toLocaleString("en-GB")}
                            author={post.users?.name}
                            content={des + "..."}
                            comments={post.comments} />
                    </div>
                )

            })
        )
}

export default Home
