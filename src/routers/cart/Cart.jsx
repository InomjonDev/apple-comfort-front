import { useSelector } from 'react-redux'

import { Minus, Plus, Trash } from 'lucide-react'
import { useActions } from '../../hooks/useActions'
import { formatPrice } from '../../utils/products.utils'
import './Cart.css'

const Cart = () => {
	const cart = useSelector(state => state.cart.value)
	const { addToCart, decrementCart, removeFromCart } = useActions()

	console.log(cart)

	return (
		<div className='cart container'>
			{cart?.length === 0 ? (
				<Empty empty_img={CartImg} />
			) : (
				<div className='cart__wrapper'>
					<div className='cart__wrapper-top'>
						<span>Savatcha</span>
						<button>
							Olib Tashlash <Trash />
						</button>
					</div>
					<div className='cart__wrapper-body'>
						<ul className='cart__wrapper-list'>
							{cart?.map(item => (
								<li className='cart__wrapper-list-item' key={item.id}>
									<div className='cart__wrapper-list-item-img'>
										<img
											src={item.imageUrls[0]}
											alt={item.title}
											width={90}
											height={90}
										/>
									</div>
									<div className='cart__wrapper-list-item-body'>
										<span>{item.title}</span>
										<span>{item.desc}</span>
									</div>
									<div className='cart__wrapper-list-item-actions'>
										<div className='cart__wrapper-list-item-quantity'>
											<button onClick={() => decrementCart(item)}>
												<Minus />
											</button>
											<p>{item.quantity}</p>
											<button onClick={() => addToCart(item)}>
												<Plus />
											</button>
										</div>
										<button
											className='cart__wrapper-list-item-remove'
											onClick={() => removeFromCart(item.id)}
										>
											<Trash /> Olib tashlash
										</button>
									</div>
									<div className='cart__wrapper-list-item-price'>
										<span>{formatPrice(item.price)}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Cart
