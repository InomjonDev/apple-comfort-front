import { Link } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
	return (
		<div className='not-found-container'>
			<h1 className='not-found-title'>404</h1>
			<p className='not-found-message'>
				Oops! The page you're looking for does not exist.
			</p>
			<Link to='/' className='not-found-link'>
				Go to Homepage
			</Link>
		</div>
	)
}

export default NotFound
