import { Heart, LucideShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'

import React from 'react'
import './Product.css'

function Product({ data, loading, error }) {
	const favorites = useSelector(state => state.favorites)
	const { toggleFavorites, addToCart } = useActions()

	const formatPrice = price => {
		const numericPrice = typeof price === 'string' ? parseFloat(price) : price
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(numericPrice)
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
								<Link to={`/product/${item._id}`} state={{ item }}>
									<img src={item.imageUrls[0]} alt={item.title} width={320} />
								</Link>
								<button className='product__item-heart'>
									{favorites.some(p => p.id === item.id) ? (
										<Heart
											onClick={() => {
												toggleFavorites(item)
											}}
											fill='#f00'
											color='#f00'
										/>
									) : (
										<Heart onClick={() => toggleFavorites(item)} />
									)}
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
