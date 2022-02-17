import React, { useState, useEffect, createContext } from 'react';
import { Grid } from '@material-ui/core'
import ShowList from './ShowList';

export const DataConText = createContext()

function Bootstrap() {
  const [type, setType] = useState('posts')
  const [blogs, setBlogs] = useState([])

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(postsList => setPosts(postsList))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(commentsList => setComments(commentsList))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(usersList => setUsers(usersList))
      .catch((err) => console.log(err))
  }, [])


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

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(listItem => {
        setBlogs(listItem)
      })
  }, [type])

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar*/}
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Home Page</div>
        <div className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('posts') }}>Posts</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('comments') }}>Comments</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!" onClick={() => { setType('users') }}>Users</a>
        </div>
      </div>
      {/* Page content wrapper*/}
      <div id="page-content-wrapper">
        {/* Top navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
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
          <DataConText.Provider value={posts}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} sm={6}>
                <ShowList posts={posts} comments={comments} users={users}/>
              </Grid>
          </Grid>
        </DataConText.Provider>
      </div>
    </div>
      </div >

  )
}


export default Bootstrap