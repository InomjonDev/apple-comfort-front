import { createSlice } from '@reduxjs/toolkit'

const storedFavorites = localStorage.getItem('cart')
const initialState = storedFavorites ? JSON.parse(storedFavorites) : []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			// Find the item in the cart by its unique ID
			const index = state.findIndex(item => item._id === payload._id)
			let updatedCart

			if (index < 0) {
				// Item is not in the cart, add it
				updatedCart = [...state, { ...payload, quantity: 1 }]
			} else {
				// Item is already in the cart, increment its quantity
				updatedCart = state.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity + 1 } : item
				)
			}

			// Store the updated cart in localStorage
			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},

		removeFromCart: (state, { payload: id }) => {
			// Remove the item from the cart
			const updatedCart = state.filter(item => item._id !== id)
			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},

		decrementCart: (state, { payload }) => {
			// Find the item in the cart
			const index = state.findIndex(item => item._id === payload._id)
			let updatedCart = state

			if (index >= 0) {
				// Decrease the quantity of the item
				updatedCart = state.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity - 1 } : item
				)
				// Remove the item from the cart if quantity drops to 0
				updatedCart = updatedCart.filter(item => item.quantity > 0)
			}

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},
	},
})

export const { actions, reducer } = cartSlice
