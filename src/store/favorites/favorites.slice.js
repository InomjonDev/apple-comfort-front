import { createSlice } from '@reduxjs/toolkit'

const storedFavorites = localStorage.getItem('favorites')
const initialState = storedFavorites ? JSON.parse(storedFavorites) : []

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: product }) => {
			const productExists = state.some(p => p.id === product.id)

			if (productExists) {
				const updatedFavorites = state.filter(p => p.id !== product.id)
				localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
				return updatedFavorites
			} else {
				// Add the product to the favorites array
				const updatedFavorites = [...state, product]
				localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
				return updatedFavorites
			}
		},
	},
})

export const { actions, reducer } = favoritesSlice
