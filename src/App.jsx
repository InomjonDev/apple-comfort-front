import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Cart, Favorites, Home } from './routers/'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	)
}

export default App
