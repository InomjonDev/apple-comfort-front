import { useSelector } from 'react-redux'
import { Empty, ProductWrapper } from '../../components'

import { useEffect } from 'react'
import FavoritesImg from '../../assets/empty/favorites.png'
import { scrollToTop } from '../../utils/scrollToTop'
import './Favorites.css'

function Favorites() {
	const favorites = useSelector(state => state.favorites)

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div className='container favorites'>
			<div className='favorites__wrapper'>
				{favorites?.length ? (
					<ProductWrapper data={favorites} isFavorites />
				) : (
					<Empty empty_img={FavoritesImg} />
				)}
			</div>
		</div>
	)
}

export default Favorites
