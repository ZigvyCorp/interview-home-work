import React, { useEffect, useRef, useState } from 'react';
import {Pagination} from './Pagination';
import { ListPost } from './ListPost';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import {setSearchPosts, setSearch} from '../actions';


export const Page = () => {
  // const [search, setSearch] = useState('');
  const searchRef = useRef();
  const search = useSelector(state => state.search);
    const {num} = useParams();
    let currentPage = null;
    if(num) {
      currentPage = num;
    }
    else {
      currentPage = 1;
    }

    const dispatch = useDispatch();

    const postsPerPage = useSelector(state => state.postsPerPage);
    const posts = useSelector(state => state.posts);
    const searchPosts = useSelector(state => state.searchPosts);

    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = searchPosts.slice(indexOfFirstPage, indexOfLastPage);

    const handleSearch = () => {
      const searchText = searchRef.current.value.trim();
      const newPosts = posts.filter(post => post.title.indexOf(searchText) !== -1);
      dispatch(setSearchPosts(newPosts));
      dispatch(setSearch(searchText));
    }

    const deleteSearch = () => {
      searchRef.current.value = '';
      dispatch(setSearch(''));
      dispatch(setSearchPosts(posts));
    }

    useEffect(() => {
      dispatch(setSearch(''));
    },[]);

    return (
        <div className="container-fluid">
              <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid input-group" style={{width: '500px'}}>
                  
                    <input className="form-control me-2" 
                    type="search" placeholder="Search" aria-label="Search"
                      ref={searchRef} 
                    /> 
                    <Link to="/" className="btn btn-outline-light text-dark" 
                    type="submit"  onClick={() => handleSearch()}
                    >Search</Link>
                  
                </div>
              </nav>
              
              <p className="h2 mt-5 mb-3 text-danger text-center">LIST OF POSTS ON HOME PAGE 
                  <span className="fs-4 text-dark"> <i className="far fa-file"></i> {currentPage}</span>
              </p>
              {
                search !== '' && (<p className="h4 mb-3 text-info">
                    Search: "<em className="text-danger">{search}</em>" 
                    <span className="btn fs-3 text-warning" onClick={() => deleteSearch()}>
                        <i className="far fa-trash-alt"></i>
                    </span></p>)
              }
              {
                currentPosts.map(post => {
                  return <ListPost post={post} key={post.id} />;
                })
              }
              <Pagination />
            </div>
    );
}