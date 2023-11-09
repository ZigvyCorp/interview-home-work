import React, { useCallback, useEffect, useMemo, useState } from "react";
import Menu from "../components/Menu";
import Content from "../components/Content";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Blog = () =>{
    const [blog,setBlog] = useState(null);
    const [user,setUser] = useState(null);
    const [comments,setComments] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [countPerPage,setCountPerPage] = useState(3);

    // pagination
    let start = countPerPage * currentPage - countPerPage;
    let end = countPerPage * currentPage;

    const pagin =[];
    for(let i=0; i<(blog && blog.length / countPerPage);i++){
        pagin.push(i)
    }

     // handle change pagination
     const handlePagination = useCallback((e,p)=>{
        setCurrentPage(p)
    },[])
    useEffect (()=>{
        axios.get('http://localhost:3001/posts')
        .then((res)=>{
            setBlog(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

console.log(blog)
     //author
     useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
     },[])
     
     // comments
     useEffect(()=>{
        axios.get('http://localhost:3001/comments/take')
        .then((res)=>{
            setComments(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
     },[])
   
    return <div>
        <Menu/>
        <div className=" ">
            {blog && blog.slice(start,end).map(item=>{
                return  <Content
                            title={item.title}
                            author={user && user.find(it => it._id === item.owner).username}
                            tags={item.tags}
                            content = {item.content}
                            createdAt = {item.createdAt}
                            comments = {comments && comments.filter(it =>it.post === item._id)}
                            user = {user}
                        />
        })}
        </div>

        <Stack spacing={2} className={`mt-3 mb-3  ${blog && blog.length >0 ?"flex justify-end":"hidden"}`}>
                    <Pagination count={pagin.length} variant="outlined" shape="rounded" className="flex justify-end" onChange={handlePagination}/>
            </Stack>
       
    </div>
}

export default Blog