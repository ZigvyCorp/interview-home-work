import { Post } from "../components";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../themes/colors";

export const SearchResultPage = () => {
    const [searchParams, ] = useSearchParams();
    const [filter, setFilter] = useState([]);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activeIndex, setActiveIndex] = useState(1);
    const title = searchParams.get("title");
    
    const itemPerPages = 5;
    const startIndex = (activeIndex - 1) * itemPerPages;

    const handleIndexOnChange = (index) => {
        setActiveIndex(index);
    }

    const filterPost = (posts) => {
        let result = [];
        posts.forEach((post)=>{
            if(post.title.includes(title)) result.push(post);
        })
        setTotalPages(Math.ceil(result.length / itemPerPages))
        setFilter(result.slice(startIndex, startIndex + itemPerPages))
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])

    useEffect(()=>{
        filterPost(posts);
    }, [activeIndex])

    return (
        <Container fluid>
            {
                filter.length === 0 ?
                <p style={$text}>No results match <b>{`${title}`}</b></p>
                :
                filter.map((post, index) => (
                    index < filter.length - 1 ?
                    <>
                        <Post key={post.id} data={post} />
                        <div style={$separatorLine}></div>
                    </>
                    :
                    <Post key={post.id} data={post} />
                ))
            }
            {
                filter.length !== 0 &&
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
            }
        </Container>
    );
};

const $separatorLine = {
    width: "100%",
    height: 4,
    backgroundColor: colors.black
}

const $text = {
    fontSize: 35,
    fontWeight: 400,
    marginTop: 20
}

const $paginationContainer = {
    margin: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10
}