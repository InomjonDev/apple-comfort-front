import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Cart, Favorites, Home, NotFound } from './routers/'

function App() {
	const { pathname } = useLocation()
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
