import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Login, Navbar } from './components'
import {
	Admin,
	Cart,
	Favorites,
	Home,
	NotFound,
	ProtectedRoute,
} from './routers/'

function App() {
	const { pathname } = useLocation()

	return (
		<div>
			{pathname === '/login' ? null : <Navbar />}

			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/admin' element={<ProtectedRoute element={<Admin />} />} />
			</Routes>

			{pathname === '/login' ? null : <Footer />}
		</div>
	)
}

export default App
