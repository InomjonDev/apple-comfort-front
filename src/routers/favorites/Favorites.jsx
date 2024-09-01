import { useSelector } from 'react-redux'

import { Empty, ProductWrapper } from '../../components'

import FavoritesImg from '../../assets/empty/favorites.png'

import './Favorites.css'

function Favorites() {
	const { favorites } = useSelector(state => state)

	return (
		<div className='container favorites'>
			<div className='favorites__wrapper'>
				{favorites?.length ? (
					<ProductWrapper data={favorites} />
				) : (
					<Empty empty_img={FavoritesImg} />
				)}
			</div>
		</div>
	)
}

export default Favorites
