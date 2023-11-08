import axios from 'axios';
import { useEffect, useState } from 'react';

export function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3333')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      Home
      <p>{data}</p>
    </div>
  );
}
