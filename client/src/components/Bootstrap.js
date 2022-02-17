import React, { useState, useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import ShowList from './ShowList';
import { DataConText } from '../DataContext';
import SearchFilter from './SearchFilter';


function Bootstrap() {

  const dataList = useContext(DataConText)
  const postsList = dataList.posts
  const commentsList = dataList.comments
  const usersList = dataList.users

  postsList.map(post => {
    post.body = post.body.substring(0, 99)
  });

  const userPost = postsList.map(post => (
    {
      ...post,
      ...usersList.find(user => user.id === post.userId),
      count: 0
    })
  )
  
  function handleFilter(filterValue) {
    // console.log(filterValue);
    // console.log(userPost);
    const filterPost = userPost.filter(post => post.title.toLowerCase().indexOf(filterValue) > -1)

    
    console.log(filterPost)
  }

  // const [type, setType] = useState('posts')
  // const [blogs, setBlogs] = useState([])

  // useEffect(() => {

  //   Promise.all([
  //     fetch("https://jsonplaceholder.typicode.com/posts"),
  //     fetch("https://jsonplaceholder.typicode.com/comments"),
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //   ]).then(allRes => {
  //     const postsRes = allRes[0].json().then(
  //       postsData => setPosts(postsData)
  //     )
  //     const commentsRes = allRes[1].json().then(
  //       commentsData => setComments(commentsData)
  //     )
  //     const usersRes = allRes[2].json().then(
  //       usersData => setUsers(usersData)
  //     )

  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(res => res.json())
  //     .then(listItem => {
  //       setBlogs(listItem)
  //     })
  // }, [type])


  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar*/}
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Home Page</div>
        <div className="list-group list-group-flush">
          {/* <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('posts') }}>Posts</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('comments') }}>Comments</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('users') }}>Users</a> */}
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" >Posts</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" >Comments</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" >Users</a>

        </div>
      </div>
      {/* Page content wrapper*/}
      <div id="page-content-wrapper">
        {/* Top navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn-primary" id="sidebarToggle" style={{marginRight: '10px'}} >Toggle Menu</button>
            <SearchFilter onSubmit={handleFilter} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#!">Action</a>
                    <a className="dropdown-item" href="#!">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#!">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page content*/}
        <div className="container-fluid">
          <h1 className="mt-4"></h1>

          <Grid container spacing={5} alignItems="stretch">
            {userPost.map((data,index)=> (
              <Grid item xs={12} sm={6} key={index} >
                <ShowList value={data}/>
              </Grid>
            ))}
          </Grid>

        </div>
      </div>
    </div >

  )
}


export default Bootstrap