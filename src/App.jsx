import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Navbar } from './components'
import {
	Admin,
	Cart,
	Favorites,
	Home,
	Login,
	NotFound,
	ProtectedRoute,
	SingleRoute,
} from './routers/'

function App() {
	const { pathname } = useLocation()

	const showNavbarAndFooter = !['/login', '/admin'].includes(pathname)

	return (
		<div className='app'>
			{showNavbarAndFooter && <Navbar />}

			<div className='app__content'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
					<Route path='/*' element={<NotFound />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/cart' element={<Cart />} />
					<Route
						path='/admin'
						element={<ProtectedRoute element={<Admin />} />}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/product/:id' element={<SingleRoute />} />
				</Routes>
			</div>

			{showNavbarAndFooter && <Footer className='app__footer' />}
		</div>
	)
}

export default App
