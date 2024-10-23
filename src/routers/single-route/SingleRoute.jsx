import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react' // Import useState
import { useLocation } from 'react-router-dom'
import './SingleRoute.css'

function SingleRoute() {
	const location = useLocation()
	const item = location.state.item

	// State to hold the currently displayed image
	const [currentImage, setCurrentImage] = useState(item.imageUrls[0])

	// Function to handle image change
	const handleImageClick = img => {
		setCurrentImage(img)
	}

	return (
		<div className='single-route container'>
			<div className='single-route__wrapper'>
				<div className='single-route__item'>
					<div className='single-route__item-img'>
						<img src={currentImage} alt={item.title} />{' '}
						{/* Use currentImage here */}
						<div className='single-route__item-options'>
							{item.imageUrls.map((img, index) => (
								<div
									className='single-route__item-options-img'
									key={index}
									onClick={() => handleImageClick(img)} // Set up click handler
								>
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
							<button className='single-route__button'>
								<Heart size={16} /> Add to favorites
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleRoute
