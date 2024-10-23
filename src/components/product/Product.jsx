import { Heart, LucideShoppingCart } from 'lucide-react' // Assuming you're using lucide-icons
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import useGetProducts from '../../hooks/useGetProducts'

import './Product.css'

function Product() {
	const { favorites } = useSelector(state => state)
	const { toggleFavorites, addToCart } = useActions()
	const { data, loading, error } = useGetProducts()

	const formatPrice = price => {
		const numericPrice = typeof price === 'string' ? parseFloat(price) : price
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(numericPrice)
	}

	const isFavorite = (favorites, productId) => {
		return favorites.some(favorite => favorite._id === productId)
	}

	return (
		<div className='product container'>
			<div className='product__wrapper'>
				{loading ? (
					<div className='spinner'></div>
				) : error ? (
					<div className='product__error'>Error loading products...</div>
				) : (
					data.map(item => (
						<div className='product__item' key={item.id}>
							<div className='product__item-img'>
								<Link to={`/product/${item.id}`} state={{ item }}>
									<img src={item.imageUrls[0]} alt={item.title} width={320} />
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
								<span className='product__item-title'>
									<Link to={`/product/${item._id}`} state={{ item }}>
										{item.title}
									</Link>
								</span>
								<span className='product__item-desc'>{item.desc}</span>
								<span className='product__item-price'>
									{formatPrice(item.price)}
								</span>
								<button
									className='product__item-btn'
									onClick={() => addToCart(item)}
								>
									<LucideShoppingCart />
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default Product
