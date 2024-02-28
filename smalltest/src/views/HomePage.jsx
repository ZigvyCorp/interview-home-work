import { useEffect, useState } from "react";
import CardBlog from "../components/Card/CardBlog";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { loadPosts } from "../container/Redux/action";
import { store } from "../container/Redux/store";

function HomePage() {
    const [posts, setPosts] = useState([])
    const [offset, setOffset] = useState(1)
    const dispath = useDispatch()

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${offset}`)
        //         setPosts(pre => [...pre, ...res.data])
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${offset}`)
            .then(res => setPosts(pre => [...pre, ...res.data]))
        // fetchData()
        dispath(loadPosts(posts))

    }, [offset])

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
            if (currentHeight + 1 >= scrollHeight) {
                setOffset(offset + 1)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [offset])

    return (
        <div className="App">
            {posts && posts.map((blog, index) => {
                return (
                    <div key={index}>

                        <CardBlog data={blog} />
                    </div>
                )
            })}
        </div>
    );
}

function mapStatetoProps() {
    return {
        posts: store.getState().posts.posts,
    }
}

function mapDispathtoProps(dispath) {
    return {
        loadPosts: (data) => dispath(loadPosts(data))
    }
}

export default connect(mapStatetoProps, mapDispathtoProps)(HomePage);
