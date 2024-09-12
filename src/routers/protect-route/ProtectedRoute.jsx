import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase/index'

const ProtectedRoute = ({ element }) => {
	const [user] = useAuthState(auth)

	return user ? element : <Navigate to='/login' />
}

export default ProtectedRoute
