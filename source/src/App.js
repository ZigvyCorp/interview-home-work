import Blogs from "./components/blogs/Blogs";
import Headers from "./components/headers/Headers";

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    let blogs = [
          {
            id: 1,
            title: "Post title 1",
            author: "Adam Levine",
            created_at: "Sep 18, 2018",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus corporis ducimus rem magnam neque. Praesentium deleniti excepturi doloremque earum. Saepe eveniet, blanditiis aperiam numquam provident vero quod tempora quasi suscipit ratione aliquam iure harum, cum doloribus pariatur expedita corporis assumenda voluptatem. Reprehenderit sunt, aperiam explicabo mollitia deleniti ipsum perspiciatis nulla inventore, cumque modi nam quasi doloribus itaque quaerat labore!",
            replies_count: 2
          },
          {
            id: 2,
            title: "Post title 2",
            author: "Adam Levine",
            created_at: "Sep 18, 2018",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus corporis ducimus rem magnam neque. Praesentium deleniti excepturi doloremque earum. Saepe eveniet, blanditiis aperiam numquam provident vero quod tempora quasi suscipit ratione aliquam iure harum, cum doloribus pariatur expedita corporis assumenda voluptatem. Reprehenderit sunt, aperiam explicabo mollitia deleniti ipsum perspiciatis nulla inventore, cumque modi nam quasi doloribus itaque quaerat labore!",
            replies_count: 2
          },
          {
            id: 3,
            title: "Post title 2",
            author: "Adam Levine",
            created_at: "Sep 18, 2018",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus corporis ducimus rem magnam neque. Praesentium deleniti excepturi doloremque earum. Saepe eveniet, blanditiis aperiam numquam provident vero quod tempora quasi suscipit ratione aliquam iure harum, cum doloribus pariatur expedita corporis assumenda voluptatem. Reprehenderit sunt, aperiam explicabo mollitia deleniti ipsum perspiciatis nulla inventore, cumque modi nam quasi doloribus itaque quaerat labore!",
            replies_count: 2
          }
        ]
    return (
      <React.Fragment>
        <Headers/>
         { blogs && blogs.map(item => (<Blogs key= {item.id} data= {item} />))}
      </React.Fragment>
        
    )
  }
}

