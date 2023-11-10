import './comment.css';

const Comment = ({ comment }) => {
  return (
    <>
      <div className='mb-3 p-2 comment-container'>
        <div className='comment-title'>
          <div className='user-avatar'>
            <img
              src='https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='user avatar'
              className='avatar'
            />
          </div>
          <div className='username text-body-secondary'>
            Han solo <span className='user-time text-black-50'>2 days ago</span>
          </div>
        </div>
        <div className='comment'>
          <div className='user-comment mb-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            odio deleniti dolorem odit exercitationem totam libero minima, quod
            suscipit illo quaerat debitis dicta vel et quis ipsam iste beatae!
            Eos error incidunt provident exercitationem quidem nulla est
            explicabo beatae quisquam?
          </div>
          <button className='btn p-0 text-primary'>Reply to</button>
        </div>
      </div>
    </>
  );
};
export default Comment;
