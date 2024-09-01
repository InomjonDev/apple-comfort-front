import { useSelector } from 'react-redux'

import './Cart.css'

function Cart() {
	const { cart } = useSelector(state => state)

	console.log(cart)

	return (
		<div className='cart container'>
			<div className='cart__wrapper'>
				{cart?.map(item => (
					<div className='cart__item' key={item._id}>
						<img src={item.image} alt={item.title} />
						<div className='cart__item-details'>
							<div className='cart__item-title'>{item.title}</div>
							<div className='cart__item-desc'>{item.desc}</div>
							<div className='cart__item-quantity'>
								Quantity:
								<input
									type='number'
									className='quantity-input'
									value={item.quantity}
									readOnly
								/>
							</div>
							<div className='cart__item-price'>${item.price}</div>
						</div>
					</div>
				))}
			</div>
			<div className='cart-summary'>
				<div className='cart-total'>
					Total: $
					{cart
						.reduce((total, item) => total + item.price * item.quantity, 0)
						.toFixed(2)}
				</div>
				<button className='order-button'>Place Order</button>
			</div>
		</div>
	)
}

export default Cart
