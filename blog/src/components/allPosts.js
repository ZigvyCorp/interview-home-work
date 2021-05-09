import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import apis from '../api';


class AllPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      users: [{
        id: 0,
        username: '',

      }]
    }
  }

  componentDidMount = async() => {
    await apis.getAllPosts().then(posts => {
     
      this.setState({
        data: posts.data.data
      })
    })
    var users = [];

    for(let index = 0; index < this.state.data.length; index++) {
      this.getUsers(this.state.data[index].owner);
    
    }
    //this.getUsers();
    //console.log(typeof this.state.data);
  }

  getUsers = async(id) => {
    var users = this.state.users;

    await apis.getUserById(id).then(user => {
      users.push(user.data.data);
      this.setState({users : users});
    }) 
    
    console.log(this.state.users);
  }

  getUser(id) {
    let users = {};
  
    const user = apis.getUserById(id).then(function(res) {
     
      users = res.data.data;
 
    });
      
    
  }
 

  render() {
    return (
      <div className="m-5 bg-light">
        {this.state.data.map((post, id) => (
          
          <Card key={id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>Author: {post.owner}</Card.Text>
            <Card.Text>Created at: {new Date(1000*post.created_at).toLocaleDateString()}</Card.Text>
            <Card.Text>{post.content}</Card.Text>        
          </Card.Body>
        </Card>
        ))}
      </div>
    )
  }
}

export default AllPosts;