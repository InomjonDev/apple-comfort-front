import { useSelector } from 'react-redux'

import { Empty } from '../../components'

import CartImg from '../../assets/empty/cart.png'

import './Cart.css'

const Cart = () => {
	const { cart } = useSelector(state => state)

	return (
		<div className='cart'>
			{cart?.length === 0 ? (
				<Empty empty_img={CartImg} />
			) : (
				<ul className='cart-items'>
					{cart?.map(item => (
						<li key={item._id} className='cart-item'>
							<img
								src={item.image}
								alt={item.title}
								className='cart-item-image'
							/>
							<div className='cart-item-info'>
								<h3 className='cart-item-title'>{item.title}</h3>
								<p className='cart-item-desc'>{item.desc}</p>
								<div className='cart-item-quantity'>
									<button onClick={() => handleQuantityChange(item._id, -1)}>
										-
									</button>
									<span>{item.quantity}</span>
									<button onClick={() => handleQuantityChange(item._id, 1)}>
										+
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Cart
