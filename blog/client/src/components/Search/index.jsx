import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import "./styles.scss"
import {Button, Form, FormControl} from 'react-bootstrap'
import SearchItem from './SearchItem'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getPostWithID } from '../../redux/action/postAction'
function Search({onClose}) {
    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const [listSearch,setListSearch] = useState([]);
    const [searchParam,setSearchParam] = useState("");
    useEffect(() => {
        dispatch(getPostWithID(""));
      }, []);
    const handleSearch = ()=>{
        console.log(searchParam)
        const list = posts.filter(post =>{
            const {title, body} = post;
            if(title.toLowerCase().includes(searchParam.toLowerCase()) || 
            body.toLowerCase().includes(searchParam.toLowerCase())){
                return true;
            }
            return false;
        })
        setListSearch(list)
    }
    return (
    <div className='search-pages'>
        <Container>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchParam}
                onChange={(e)=> setSearchParam(e.target.value)}
                />
                <Button
                onClick = {handleSearch}
                variant="outline-success">Search</Button>
            </Form>
            
            {listSearch.length === 0?(
                <p className="no-result">
                    No expected result here
                </p>
            ):(
                <div className="list-result">
                    {
                        listSearch.map((item,i)=>{
                            return(
                                <SearchItem key={i} data={item} onClose={onClose}/>
                            )
                        })
                    }
                    
                </div>
            )}
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
            <Button variant="danger"
            onClick={onClose}>Close Search Page</Button>
            </div>
        </Container>
    </div>
  )
}

export default Search