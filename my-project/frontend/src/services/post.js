import Axios from "axios";


function add_post(post) {
  return Axios.post('/posts/create', JSON.stringify(post),{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(({data})=>data)
}

function get_post(){
  return Axios.get('/posts').then(({data})=>data)
}

export default {
  add_post,
  get_post
}