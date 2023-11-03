import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

function App() {

  const fecthApi = async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/post/getallposts`)
    return res.data
  }
  const query = useQuery({queryKey: ['todos'],queryFn: fecthApi})
  console.log('query', query);


  return (
    <div className="App">
      <header className="App-header">
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
