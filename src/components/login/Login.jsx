import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/index'
import './Login.css'

const initialState = {
	email: '',
	password: '',
}

function Login() {
	const [value, setValue] = useState(initialState)
	const [user, setUser] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})

		return () => unsubscribe()
	}, [])

	const login = async e => {
		e.preventDefault()
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				value.email,
				value.password
			)
			console.log(userCredential.user)
			// Navigate to the /admin page after successful login
			navigate('/admin')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='login'>
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
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
