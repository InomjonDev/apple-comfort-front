import {
	Contact,
	Home,
	LucideHeart,
	LucideShoppingBag,
	MapPinned,
	X,
} from 'lucide-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

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
					<li className='sidebar__item'>
						<Link to='/'>
							<Home size={28} />
							<span>Asosiy Sahifa</span>
						</Link>
					</li>
					<li className='sidebar__item'>
						<Link to='/address'>
							<MapPinned size={28} />
							<span>Filiallar</span>
						</Link>
					</li>
					<li className='sidebar__item'>
						<Link to={'/contacts'}>
							<Contact size={28} />
							<span>Kontaktlar</span>
						</Link>
					</li>
					<li className='sidebar__item'>
						<Link to={'/cart'}>
							<LucideShoppingBag size={28} />
							<span>Savat</span>
						</Link>
					</li>
					<li className='sidebar__item'>
						<Link to={'/favorites'}>
							<LucideHeart size={28} />
							<span>Sevimlilar</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Sidebar
