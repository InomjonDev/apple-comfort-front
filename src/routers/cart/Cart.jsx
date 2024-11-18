import { Minus, Plus, Trash } from 'lucide-react'
import { useSelector } from 'react-redux'
import CartImg from '../../assets/empty/cart.png'
import { Empty } from '../../components/'
import { useActions } from '../../hooks/useActions'
import { formatPrice } from '../../utils/products.utils'
import './Cart.css'

const Cart = () => {
	const cart = useSelector(state => state.cart.value)
	const { addToCart, decrementCart, removeFromCart } = useActions()

	return (
		<div className='cart container'>
			{cart?.length === 0 ? (
				<Empty empty_img={CartImg} />
			) : (
				<div className='cart__wrapper'>
					<div className='cart__wrapper-top'>
						<span>Savatcha</span>
						<button>
							Olib Tashlash <Trash size={18} />
						</button>
					</div>
					<div className='cart__wrapper-body'>
						<ul className='cart__wrapper-list'>
							{cart?.map(item => (
								<li className='cart__wrapper-list-item' key={item.id}>
									<div className='cart__wrapper-list-item-img'>
										<img src={item.imageUrls[0]} alt={item.title} />
									</div>
									<div className='cart__wrapper-list-item-body'>
										<span className='cart__wrapper-list-item-title'>
											{item.title}
										</span>
										<span className='cart__wrapper-list-item-desc'>
											{item.desc}
										</span>
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
											<Trash size={20} />
										</button>
									</div>
									<div className='cart__wrapper-list-item-price'>
										<span>{formatPrice(item.price * item.quantity)}</span>
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
