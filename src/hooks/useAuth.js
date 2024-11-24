import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { setItem } from '../utils/store.utils'

export const useAuth = () => {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			if (currentUser) {
				setItem('user', currentUser)
				navigate('/admin')
			}
		})

		return () => unsubscribe()
	}, [navigate])

	const login = async (email, password) => {
		setLoading(true)
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return { login, loading }
}
