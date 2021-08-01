import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostDetail() {
  // useParams returns object, not number

  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPostDetail() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    // console.log('details', data);
    const resComments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const dataComments = await resComments.json();
    setDetail(data);
    setComments(dataComments);
  }
  return (
    <div className='d-flex flex-column'>
      <h1> {detail?.title}</h1>
      <p>{detail?.body}</p>
      <p>Comments:{comments?.length} </p>
    </div>
  );
}
