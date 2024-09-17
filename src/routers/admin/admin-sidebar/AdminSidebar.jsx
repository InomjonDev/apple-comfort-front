import { signOut } from 'firebase/auth'
import { Box, Home, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import './AdminSidebar.css'

function AdminSidebar() {
	const navigate = useNavigate()
	const handleLogOut = async () => {
		await signOut(auth)
		navigate('/')
	}
	return (
		<div className='admin-sidebar'>
			<div className='sidebar-links'>
				<Link to='/' className='sidebar-link'>
					<Home className='sidebar-icon' />
					<span>Home</span>
				</Link>
				<Link to='/admin/manage-products' className='sidebar-link'>
					<Box className='sidebar-icon' />
					<span>Manage Products</span>
				</Link>
			</div>
			<button className='logout-button' onClick={handleLogOut}>
				<LogOut className='sidebar-icon' />
				<span>Log Out</span>
			</button>
		</div>
	)
}

export default AdminSidebar
