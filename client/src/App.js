import './App.css';
import 'bootstrap/scss/bootstrap.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from './redux/reducers/postReducer';
import { getUser } from './redux/reducers/userReducer';
import { getComment } from './redux/reducers/commentReducer';
import { Link } from 'react-router-dom';


function App() {
  const post = useSelector(state => state.postReducer.post)
  const user = useSelector(state => state.userReducer.user)
  const comment = useSelector(state => state.commentReducer.comment)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost())
    dispatch(getUser())
    dispatch(getComment())
  }, [dispatch])
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }
  return (
    <div className='bg-dark-subtle'>
      <header className='px-5 py-2 d-flex justify-content-between align-items-center bg-secondary text-light'>
        <div>
          <Link to="/" className='text-light fw-bold text-decoration-none bg-danger p-3 rounded-4'>
            Home
          </Link>
        </div>
        <div className='p-3'>
          <Link to="/" className='text-light text-decoration-none fw-bold bg-danger p-3 rounded-4'>
            Blog Post
          </Link>
        </div>
        <div>
          <Link to="/" className='text-light text-decoration-none fw-bold bg-danger p-3 rounded-4'>
            User
          </Link>
        </div>
      </header>
      <main className='container'>
        <div className='pt-3 col-4'>
          <p className='fw-bold'>Search:</p>
          <input type='text'
            className='border-1 w-100 p-2 rounded-3'
            style={{ outline: 'none' }}
            placeholder='Search . . . .'
            onChange={handleChange}
            value={searchInput}
          />
          {searchInput?.length !== 0 && (
            <div className='result position-absolute bg-light'>
              {post.filter(item => {
                const searchTerm = searchInput?.toString().toLowerCase();
                const title = item.title.toLowerCase()
                return (
                  searchTerm && (title.startsWith(searchTerm) || title.includes(searchTerm))
                  && (title !== searchTerm)
                )
              }).map((item, index) => {
                return (
                  <div key={index} className=''>
                    <Link to={`/post/${item._id}`} className='btn btn-outline-secondary w-100 text-start'>
                      {item.title}
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        {post.map((post, index) => {
          let date = new Date(post.createdAt).toLocaleDateString('en-GB');
          return (
            <div key={index} className='my-5 rounded-3 p-3 bg-white'>
              {/* Assign User to Post to get name */}
              {user.map((user, index) => {
                if (post.user === user._id) {
                  return (
                    <div key={index}>
                      <h2 className='text-center'>
                        <Link to={`/post/${post._id}`} className='text-decoration-none text-dark'>
                          {post.title}
                        </Link>
                      </h2>
                      <p className='fs-5'>Author: <span className='text-danger fw-bold'>{user.name}</span></p>
                      <p className='fs-5'>Create at:  <span className='fw-bold'>{date}</span></p>
                      <p>
                        {post.content}
                      </p>
                    </div>
                  )
                }
              })}
              {post.comment.length > 0
                ?
                // Use collapse boostrap to hide and show comment by data-bs-target, example data-bs-target=#post654c465298f704c2c88c5b15
                <button className='btn btn-primary' data-bs-toggle="collapse" data-bs-target={`#post${post._id}`}>
                  {post.comment.length} replies
                </button>
                :
                ""
              }
              <div className='border boder-top border-primary border-1 my-3'></div>
              {/* Assign Comment to Post by Id */}
              {comment.map((comment, index) => {
                let date = new Date(comment.createdAt).toLocaleDateString('en-GB');
                if (comment.post === post._id) {
                  return (
                    <div key={index}>
                      {/* Assign User to comment's user by Id */}
                      {user.map((user, index) => {
                        if (comment.user === user._id) {
                          return (
                            <>
                              {/* Use collapse boostrap to hide and show comment by Id, example id=post654c465298f704c2c88c5b15 */}
                              <div className="collapse" id={`post${post._id}`}>
                                <div className='d-flex pb-4' key={index}>
                                  <div className='col-1 p-2 avatar'>
                                    <img src={`https://picsum.photos/id/${index + 10}/200/200`} className="w-100 rounded-circle" alt="" />
                                  </div>
                                  <div className='col-10 detail ms-3 p-3 d-flex flex-column justify-content-center 
                                  border border-dark rounded-3'>
                                    <p className='fw-bold mb-1 text-danger'>
                                      {user.name} - <span className='text-secondary'>{date}</span>
                                    </p>
                                    <p className='mb-1'>
                                      {comment.content}
                                    </p>
                                    <a style={{ cursor: 'pointer' }}>Reply on</a>
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                        }
                      })}
                    </div>
                  )
                }
              })}
            </div>
          )
        })}
      </main>
      <footer className='px-5 py-2 text-center bg-secondary text-light'>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
