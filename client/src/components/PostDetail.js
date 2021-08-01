import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function PostDetail() {
  // useParams returns object, not number

  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPostDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPostDetail() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log('details', data);
    setDetail(data);
  }
  return (
    <div className='details'>
      <div className='details-content'>
        <h1> {detail.title}</h1>
      </div>
    </div>
  );
}
