import { LucideHome } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginInitialState } from '../../constants/formStates'
import { useAuth } from '../../hooks/useAuth'
import { scrollToTop } from '../../utils/scrollToTop'
import './Login.css'

function Login() {
	const [value, setValue] = useState(loginInitialState)
	const { login, loading } = useAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		await login(value.email, value.password)
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div className='login'>
			<Link to='/' className='login__link'>
				<LucideHome /> Home
			</Link>
			<form className='form' onSubmit={handleSubmit}>
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
