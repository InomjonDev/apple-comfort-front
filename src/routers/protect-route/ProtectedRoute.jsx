import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { getItem } from '../../utils/store.utils'

const ProtectedRoute = ({ element }) => {
	const userFromStorage = getItem('user')
	const currentUser = auth.currentUser

	const isAuthenticated =
		userFromStorage && currentUser && userFromStorage.uid === currentUser.uid

	return isAuthenticated ? element : <Navigate to='/login' />
}

export default ProtectedRoute
