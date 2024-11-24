import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { LucideHome } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/'
import { scrollToTop } from '../../utils/scrollToTop'
import { setItem } from '../../utils/store.utils'
import './Login.css'

const initialState = {
	email: '',
	password: '',
}

function Login() {
	const [value, setValue] = useState(initialState)
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

	const login = async e => {
		e.preventDefault()
		setLoading(true)
		try {
			await signInWithEmailAndPassword(auth, value.email, value.password)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div className='login'>
			<Link to={'/'} className='login__link'>
				<LucideHome /> Home
			</Link>
			<form className='form' onSubmit={login}>
				<input
					type='email'
					placeholder='Email'
					required
					className='form__input'
					value={value.email}
					onChange={e => setValue(p => ({ ...p, email: e.target.value }))}
				/>
				<input
					type='password'
					placeholder='Password'
					required
					className='form__input'
					value={value.password}
					onChange={e => setValue(p => ({ ...p, password: e.target.value }))}
				/>
				<button type='submit' className='form__button'>
					{loading ? 'Kirilmoqda...' : 'Kirish'}
				</button>
			</form>
		</div>
	)
}

export default Login
