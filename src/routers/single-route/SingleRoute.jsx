import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import './SingleRoute.css'

function SingleRoute() {
	const location = useLocation()
	const item = location.state.item
	const { favorites } = useSelector(state => state)
	const { toggleFavorites } = useActions()

	const [currentImage, setCurrentImage] = useState(item.imageUrls[0])

	return (
		<div className='single-route container'>
			<div className='single-route__wrapper'>
				<div className='single-route__item'>
					<div className='single-route__item-img'>
						<img src={currentImage} alt={item.title} />
						<div className='single-route__item-options'>
							{item.imageUrls.map((img, index) => (
								<div className='single-route__item-options-img' key={index}>
									<img src={img} alt={`option-image-${index}`} />
								</div>
							))}
						</div>
					</div>
					<div className='single-route__item-body'>
						<h1 className='single-route__item-title'>{item.title}</h1>
						<h5 className='single-route__item-description'>{item.desc}</h5>
						<hr />
						<p className='single-route__item-price'>${item.price}</p>
						<div className='single-route__item-buttons'>
							<button className='single-route__button'>
								<ShoppingCart size={16} /> Add to cart
							</button>
							<button
								className='single-route__button'
								onClick={() => toggleFavorites(item)}
							>
								<Heart size={16} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleRoute
