import { Heart, LucideShoppingCart } from 'lucide-react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'

import { isFavorite } from '../../utils/favorites.utils'

import './Product.css'

function Product({ data }) {
	const { favorites, cart } = useSelector(state => state)
	const { toggleFavorites, addToCart, decrementCart, removeFromCart } =
		useActions()

	return (
		<div className='product container'>
			<div className='product__wrapper'>
				{data?.map(item => (
					<div className='product__item' key={item._id}>
						<div className='product__item-img'>
							<Link to={'/'}>
								<img src={item.image} alt={item.title} width={320} />
							</Link>
							<button
								className='product__item-heart'
								onClick={() => toggleFavorites(item)}
							>
								<Heart
									color={isFavorite(favorites, item._id) ? '#f00' : '#ccc'}
									fill={isFavorite(favorites, item._id) ? '#f00' : 'none'}
								/>
							</button>
						</div>
						<div className='product__item-body'>
							<span className='product__item-title'>{item.title}</span>
							<span className='product__item-desc'>{item.desc}</span>
							<button
								className='product__item-btn'
								onClick={() => addToCart(item)}
							>
								<LucideShoppingCart />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Product
