import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as favoritesReducer } from './favorites/favorites.slice'

const reducers = combineReducers({
	favorites: favoritesReducer,
	cart: cartReducer,
})

export const store = configureStore({
	reducer: reducers,
})
