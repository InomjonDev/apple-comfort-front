import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, actions) => {
			let index = state.value.findIndex(i => i.id === actions.payload.id)
			if (index < 0) {
				state.value = [...state.value, { ...actions.payload, quantity: 1 }]
			} else {
				state.value = state.value.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity + 1 } : item
				)
			}
			localStorage.setItem('cart', JSON.stringify(state.value))
		},

		removeFromCart: (state, { payload }) => {
			const updatedCart = state.filter(item => item._id !== payload)

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		},

		decrementCart: (state, { payload }) => {
			const index = state.findIndex(item => item._id === payload._id)

			if (index >= 0 && state[index].quantity > 1) {
				state[index].quantity -= 1
			} else if (index >= 0) {
				state.splice(index, 1)
			}

			localStorage.setItem('cart', JSON.stringify(state))
		},
	},
})

export const { actions, reducer } = cartSlice
