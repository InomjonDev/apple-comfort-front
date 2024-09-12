import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { sidebarItems } from '../../static/sidebar-items'
import './Sidebar.css'

function Sidebar({ show, setShow }) {
	const location = useLocation()

	// Close sidebar on route change
	useEffect(() => {
		setShow(false)
	}, [location.pathname, setShow])

	return (
		<>
			{show && (
				<div className='sidebar__shadow' onClick={() => setShow(false)}></div>
			)}
			<div className={`sidebar ${show ? 'show' : ''}`}>
				<button className='sidebar__close' onClick={() => setShow(false)}>
					<X />
				</button>
				<ul className='sidebar__list'>
					{sidebarItems?.map(item => (
						<li className='sidebar__item' key={item.id}>
							<Link to={item.to}>
								<item.icon size={28} />
								<span>{item.text}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Sidebar
