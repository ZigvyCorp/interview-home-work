import React from 'react'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const {arrPost} = useSelector(state => state.postReducer);
 
  

  return (
    <div className='interview-home-work'>
      <header className='header bg-secondary'>
        <div className=" d-flex justify-content-between">
          <div className="logo bg-light">
            <img src="./img/logo.png" alt="" />
          </div>
          <div className="blogs text-center">
            <p>Blogs</p>
          </div>
          <div className="user bg-light text-right">
            <img src="https://i.pravatar.cc" alt="user" height={50} width={50} />
            <span>Adam Levine</span>
          </div>
        </div>
      </header>
      {arrPost.map((post,index)=>{
        return <section className='section container text-center' key={index}>
        <h2>{post.title}</h2>
        <div className="content-header container d-flex justify-content-between">
          <div className="left">
            <h3>Author: John Smith</h3>
            <h3> Created at: Sep 20, 2018</h3>
          </div>
          <div className="right">
            <div className='button-group d-flex flex-wrap'>
              <div>
                <p id='magenta'>magenta</p>
              </div>
              <div>
                <p id='red'>red</p>
              </div>
              <div>

                <p id='volcano'>volcano</p>
              </div>
              <div>

                <p id='orange'>orange</p>
              </div>
              <div>

                <p id='gold'>gold</p>
              </div>
              <div>

                <p id='lime'>lime</p>
              </div>
              <div>

                <p id='green'>green</p>
              </div>
              <div>

                <p id='cyan'>cyan</p>
              </div>
              <div>

                <p id='blue'>blue</p>
              </div>
              <div>

                <p id='geekblue'>geekblue</p>
              </div>
              <div>

                <p id='purple'>purple</p>
              </div>
            </div>

          </div>
        </div>

        <div className="content">
          <p id='post-content'>{post.content}</p>
        </div>
        <footer className="footer container d-flex flex-start">
          <p>2 replies</p>
          <span className='text-danger'>Click to see comments</span>
        </footer>
      </section>
      })}
      

    </div>
  )
}
