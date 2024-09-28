import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { HeaderBar, Post, SearchBar } from "../components";
import { colors } from "../themes/colors";
import { useState, useEffect } from "react";
export const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [posts, setPosts] = useState([]);

    const itemPerPages = 5;
    const startIndex = (activeIndex - 1) * itemPerPages;
    const totalPages = Math.ceil(posts.length / itemPerPages);
    const postSegments = posts.slice(startIndex, startIndex + itemPerPages);

    const handleIndexOnChange = (index) => {
        setActiveIndex(index);
    }

    const handlePostsOnChange = (posts) => {
        setPosts(posts);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => handlePostsOnChange(posts))
    }, [])

    return (
        <Container fluid style={$container}>
            <HeaderBar />
            <div style={$separator}></div>
            <SearchBar />
            <div style={$separator}></div>
            <div style={$postsContainer}>
                {
                    postSegments.map((post, index) => (
                        index < posts.length - 1 ?
                        <>
                            <Post key={post.id} data={post} />
                            <div style={$separatorLine}></div>
                        </>
                        :
                        <Post key={post.id} data={post} />
                    ))
                }
            </div>
            <div style={$paginationContainer}>
                <Pagination>
                    <Pagination.First disabled={activeIndex === 1} onClick={() => handleIndexOnChange(1)}/>
                    <Pagination.Prev disabled={activeIndex === 1} onClick={() => handleIndexOnChange(activeIndex - 1)}/>
                    {
                        Array.from({length: totalPages}).map((_, index) => {
                            return <Pagination.Item key={index} active={activeIndex === index + 1} onClick={()=>handleIndexOnChange(index+1)}>{index + 1}</Pagination.Item>
                        })
                    }
                    <Pagination.Next disabled={activeIndex === totalPages} onClick={() => handleIndexOnChange(activeIndex + 1)}/>
                    <Pagination.Last disabled={activeIndex === totalPages} onClick={() => handleIndexOnChange(totalPages)}/>
                </Pagination>
            </div>
        </Container>
    );
}

const $container = {
    marginTop: 15
}

const $separator = {
    margin: "40px 0"
}

const $postsContainer = {
    display: "flex",
    flexDirection: "column",
    gap: 40
}

const $separatorLine = {
    width: "100%",
    height: 4,
    backgroundColor: colors.black
}

const $paginationContainer = {
    margin: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
}