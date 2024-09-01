import { createSlice } from '@reduxjs/toolkit'

const storedFavorites = localStorage.getItem('favorites')
const initialState = storedFavorites ? JSON.parse(storedFavorites) : []

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: product }) => {
			const isExists = state.some(p => p._id === product._id)
			let updatedFavorites

			if (isExists) {
				updatedFavorites = state.filter(item => item._id !== product._id)
			} else {
				updatedFavorites = [...state, product]
			}

			localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

			return updatedFavorites
		},
	},
})

export const { actions, reducer } = favoritesSlice
