import { useSelector } from 'react-redux'

import { Empty } from '../../components'

import CartImg from '../../assets/empty/cart.png'

import './Cart.css'

const Cart = () => {
	const { cart } = useSelector(state => state)

	return (
		<div className='cart container'>
			{cart?.length === 0 ? (
				<Empty empty_img={CartImg} />
			) : (
				<ul className='cart__items'>
					{cart?.map(item => (
						<li key={item._id} className='cart__item'>
							<img
								src={item.image}
								alt={item.title}
								width={250}
								className='cart__item-image'
							/>
							<div className='cart__item-info'>
								<h3 className='cart__item-title'>{item.title}</h3>
								{/* <p className='cart-item-desc'>{item.desc}</p> */}
								<div className='cart__item-quantity'>
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
