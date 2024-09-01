import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { LucideHeart, LucideShoppingBag, Menu } from 'lucide-react'

import { Sidebar } from '../'

import './Navbar.css'

function Navbar() {
	const [show, setShow] = useState(false)
	const { favorites, cart } = useSelector(state => state)

	document.body.style.overflow = show ? 'hidden' : 'auto'

	const { pathname } = useLocation()

	const getNavClass = path =>
		pathname === path ? 'navbar__item active' : 'navbar__item'

	return (
		<>
			<div className='navbar'>
				<div className='container navbar__main'>
					<div className='navbar__logo'>
						<Link to='/'>
							<i>AppleComfort</i>
						</Link>
					</div>
					<ul className='navbar__list'>
						<li className={getNavClass('/')}>
							<Link to='/'>Asosiy Sahifa</Link>
						</li>
						<li className={getNavClass('/address')}>
							<Link to='/address'>Filiallar</Link>
						</li>
						<li className={getNavClass('/contacts')}>
							<Link to='/contacts'>Kontaktlar</Link>
						</li>
					</ul>

					<ul className='navbar__actions'>
						<li className='navbar__actions-item'>
							<Link className='navbar__cart' to={'/cart'}>
								<LucideShoppingBag size={28} />
								<span>{cart.length}</span>
							</Link>
						</li>
						<li className='navbar__actions-item'>
							<Link className='navbar__cart' to='/favorites'>
								<LucideHeart size={28} />
								<span>{favorites.length}</span>
							</Link>
						</li>
					</ul>

					<button className='navbar__menu' onClick={() => setShow(!show)}>
						<Menu size={28} />
					</button>
				</div>
			</div>
			<Sidebar show={show} setShow={setShow} />
		</>
	)
}

export default Navbar
