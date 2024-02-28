import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo  from '../../assets/logo.png';
const CommentComp = ({ avatar, name, time, content }) => {
  const truncatedContent = content.length > 100 ? content.slice(0, 100) + '...' : content;
  return (
    <div className="media-comment-box mb-4">
      <div className='comment-avatar overflow-hidden rounded-circle' 
      style={{ 
          width: '100%',
          flex: '0 0 50px',
          display:'flex',
          maxWidth:'50px',
         
        }}>  
        <img src={logo} className="rounded-circle" alt={name} style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="media-body"
       style={{
          flex:"0 0 calc(100% - 150px)",
          maxWidth:"0 0 calc(100% - 150px)",
          width:"100%",
          paddingLeft:"10px",
       }}>
        <span className="name-user">{name}</span>
        <span className="time-comment">{moment(time).fromNow()}</span>
        <p className='py-2 mb-0'>{truncatedContent}</p>
        <a className="text-decoration-none text-secondary reply-btn">Reply</a>
      </div>
    </div>
  );
};
export default CommentComp