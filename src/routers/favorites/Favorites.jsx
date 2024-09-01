import { useSelector } from 'react-redux'

import { ProductWrapper } from '../../components'

import './Favorites.css'

function Favorites() {
	const { favorites } = useSelector(state => state)

	return (
		<div className='container favorites'>
			<div className='favorites__wrapper'>
				<ProductWrapper data={favorites} />
			</div>
		</div>
	)
}

export default Favorites
