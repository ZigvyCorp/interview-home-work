import './App.css';
import User from './user';
import React, { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState('User')
  return (
    <div className="App">
      <header className="App-header">
        {page==='User'? <User/>: ''}

        <br/>
        <button onClick={()=>setPage('User')}>User</button>
        <br/>
      </header>
    </div>
  );
}
  
export default App;
