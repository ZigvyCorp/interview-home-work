import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Dummy Social Club</h1>
      <Link to='about' className='btn btn-primary btn-lg'>
        Learn more
    </Link>
    </div>
  )
};

export default HomePage;