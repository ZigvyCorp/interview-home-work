import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostDetail() {
  // useParams returns object, not number

  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [time, setTime] = useState('');
  const { id } = useParams();
  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  useEffect(() => {
    getPostDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPostDetail() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    const resComments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const dataComments = await resComments.json();
    setDetail(data);
    setComments(dataComments);
    setTime(randomDate(new Date(2015, 0, 1), new Date()));
  }
  return (
    <div className='d-flex flex-column m-5 p-5'>
      <h1 className='text-capitalize'> {detail?.title}</h1>
      <Moment style={{ fontSize: '1.5rem', marginBottom: '2rem' }} fromNow>
        {time}
      </Moment>
      <p style={{ fontSize: '1.3rem' }}>{detail?.body}</p>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
        Comments: {comments?.length}
      </p>
    </div>
  );
}
