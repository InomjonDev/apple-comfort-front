import {
	Heart,
	LucideArrowLeft,
	LucideArrowRight,
	ShoppingCart,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { scrollToTop } from '../../utils/scrollToTop'
import {
	handleNextImage,
	handlePreviousImage,
} from '../../utils/single-route.utils'
import './SingleRoute.css'

function SingleRoute() {
	const location = useLocation()
	const item = location.state.item
	const { favorites } = useSelector(state => state)
	const { toggleFavorites, addToCart } = useActions()

	const [currentIndex, setCurrentIndex] = useState(0)

	const nextImage = () => {
		setCurrentIndex(prevIndex =>
			handleNextImage(prevIndex, item.imageUrls.length)
		)
	}

	const previousImage = () => {
		setCurrentIndex(prevIndex =>
			handlePreviousImage(prevIndex, item.imageUrls.length)
		)
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div className='single-route container'>
			<div className='single-route__wrapper'>
				<div className='single-route__item'>
					<div className='single-route__item-images'>
						<div className='single-route__item-img'>
							<button
								className='single-route__item-slider-button single-route__item-slider-button-left'
								onClick={previousImage}
							>
								<LucideArrowLeft />
							</button>
							<img
								src={item.imageUrls[currentIndex]}
								alt={item.title}
								className='single-route__item-img-main'
							/>
							<button
								className='single-route__item-slider-button single-route__item-slider-button-right'
								onClick={nextImage}
							>
								<LucideArrowRight />
							</button>
							<div className='single-route__item-options'>
								{item.imageUrls.map((img, index) => (
									<div
										className={`single-route__item-options-img ${
											index === currentIndex ? 'active' : ''
										}`}
										key={index}
										onClick={() => setCurrentIndex(index)}
									>
										<img src={img} alt={`option-image-${index}`} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='single-route__item-body'>
						<h1 className='single-route__item-title'>{item.title}</h1>
						<h5 className='single-route__item-description'>{item.desc}</h5>
						<hr />
						<p className='single-route__item-price'>${item.price}</p>
						<div className='single-route__item-buttons'>
							<button
								className='single-route__button'
								onClick={() => addToCart(item)}
							>
								<ShoppingCart size={16} /> Savatchaga qo'shish
							</button>
							<button
								className='single-route__button'
								onClick={() => toggleFavorites(item)}
							>
								{favorites.some(p => p.id === item.id) ? (
									<>
										<Heart fill='#f00' color='#f00' size={16} /> Sevimlilardan
										olib tashlash
									</>
								) : (
									<>
										<Heart size={16} /> Sevimlilarga qo'shing
									</>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleRoute
