import { createSlice } from '@reduxjs/toolkit'

const storedFavorites = localStorage.getItem('cart')
const initialState = storedFavorites ? JSON.parse(storedFavorites) : []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const index = state.findIndex(item => item._id === payload._id)
			let updatedCart

			if (index < 0) {
				updatedCart = [...state, { ...payload, quantity: 1 }]
			} else {
				updatedCart = state.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity + 1 } : item
				)
			}

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},

		removeFromCart: (state, { payload: id }) => {
			const updatedCart = state.filter(item => item._id !== id)
			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},

		decrementCart: (state, { payload }) => {
			const index = state.findIndex(item => item._id === payload._id)
			let updatedCart = state

			if (index >= 0) {
				updatedCart = state.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity - 1 } : item
				)

				updatedCart = updatedCart.filter(item => item.quantity > 0)
			}

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},
	},
})

export const { actions, reducer } = cartSlice
