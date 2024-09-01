import { Link, useLocation } from 'react-router-dom'
import './Empty.css'

function Empty({ empty_img }) {
	const { pathname } = useLocation()
	return (
		<div className='empty'>
			<div className='empty__wrapper'>
				<div className='empty__img'>
					<img src={empty_img} alt='' />
				</div>
				<div className='empty-body'>
					<h3>
						{pathname === '/favorites'
							? "Saralanganlarda hozirda mahsulot yo'q"
							: "Savatchada hozirda mahsulot yo'q"}
					</h3>
					<Link to={'/'}>Bosh sahifa</Link>
				</div>
			</div>
		</div>
	)
}

export default Empty
