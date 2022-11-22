import React from 'react'

export default function nav() {
  return (
    <div className='navbar-content p-3'>
        
        <div className="navbar  fixed-top navbar-toggleable-md navbar-light bg-light">
           <div className='logo'>
                <a className='navbar-brand ms-3'>Logo</a> 

           </div>
           
            <div className="navbar-main" >
                <ul className="navbar-nav">
                    <li className='nav-items active'>
                        <a className="nav-link " href="/">BLOG</a>
                    </li>
                   
                </ul>
            </div>
            <div className='navbar-info d-flex'>
                <div className='ms-2'>
                <img src="https://cdn1.iconfinder.com/data/icons/animals-95/300/cat-circle-animal-pet-wild-domestic-256.png" width={50} height={50} className="rounded-circle mr-2" alt="Ashley Briggs" />
                </div>
                <div className='mt-3'>
                    Adam Levine
                </div>
                
              
            </div>
        </div>
    </div>
  )
}
