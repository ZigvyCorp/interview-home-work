import React from 'react'
import { Link} from 'react-router-dom'
import './index.css'
import notFoundImages from '../../images/404.png'
const NotFound = () => {

	return <div>
			<div className="container text-center">
				<div className="content-404">
					<img src={notFoundImages} className="img-responsive" alt="" />
					<h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
					<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
					<h2><Link to="/">Bring me back Home</Link></h2>
				</div>
			</div>
		</div>
}

    

export default NotFound