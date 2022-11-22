import React, { useEffect, useState } from 'react'
const {BASE_URL} = require('../constant')
// import { Cookies } from 'react-cookie'
function Blogs(props) {
  const [token, setToken] = useState()
  const [dataPost, setDataPost] = useState()
  var contents = []
  useEffect(()=>{
    fetch(`${BASE_URL}api/users/login`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({username: "meowmeow", password: '1234567890'})
  })
      .then(res => {
          if (res.ok) {
              return res.json()
          }
      }).then(data => {
        // bình thường sẽ lưu token lên cookie sau đó mội khi gọi api sẽ đọc từ cookie ra nếu có token thì mới cho phép chạy
        // ở đây làm tắt nên sẽ sét token vào state 
        // cookies.set('access_token', data.token, { path: '/', expires: expires });
        console.log(data.token)
        setToken(data.token)
        
      }).catch(err => {
          console.error(err)
      })
  })
  useEffect(()=>{
    if (token != undefined){
      console.log("da vap ")
      fetch(`${BASE_URL}api/posts/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(data => {
          console.log(data)
          setDataPost(data)
      
  
        }
          )
    }
  
  }, [token])


    for (var i = 0; i <= dataPost?.length - 1; i++) {
      console.log(dataPost[i]?.createdAt)
      contents.push(
        <div className="card">
        <div className="card-body h-100">
          <div className="media">
            
            <div className="media-body">
              <div className='infor d-flex'>
                <p><strong>author: {dataPost[i]?.owner.name}</strong></p>

                <p className="mt-4"><strong></strong></p>

              </div>
              <small className="text-muted">Created at: {dataPost[i]?.createdAt}</small>
              <p>{dataPost[i]?.content}</p>
              
              
              
              {/*nút bình luận*/}
              <a href="#" className="text-muted text-decoration-none mt-1">
                2 replies
              </a>
              <hr></hr>
              {/*dòng bình luận*/}
              <div className="media mt-3">
                <div className='infor d-flex'>
                  <img src="https://cdn1.iconfinder.com/data/icons/animals-95/300/cat-circle-animal-pet-wild-domestic-256.png" width={50} height={50} className="rounded-circle mr-2" alt="Ashley Briggs" />
                  <p className="mt-4"><strong>Adam Levine</strong></p>
                </div>
                <div className="media-body ">
                  <p className="text-muted ">
                     Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                    mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                  </p>
                  <a href="#" class="text-decoration-none">Reply to</a>
                </div>
              </div>
              <hr />
              
            </div>
          </div>
  
        </div>
      </div>
  
      )   
      console.log("hahah", contents)
    }

 
  console.log("123123",contents)
  return (
    <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12 ">
            {contents}
            </div>
          </div>
      </div>
  )
}
export default Blogs;