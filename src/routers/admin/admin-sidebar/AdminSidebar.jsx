import { signOut } from 'firebase/auth'
import { Box, DiamondPlus, Home, LogOut } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import './AdminSidebar.css'

function AdminSidebar() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const handleLogOut = async () => {
		await signOut(auth)
		navigate('/')
	}

	const getSidebarClass = path =>
		pathname === path ? 'sidebar-link active' : 'sidebar-link'

	return (
		<div className='admin-sidebar'>
			<div className='sidebar-links'>
				<Link to='/' className='sidebar-link'>
					<Home className='sidebar-icon' />
					<span>Asosiy sahifa</span>
				</Link>
				<Link to='/admin' className={getSidebarClass('/admin')}>
					<DiamondPlus />
					<span>Mahsulot qo'shish</span>
				</Link>
				<Link
					to='/admin/manage-products'
					className={getSidebarClass('/admin/manage-products')}
				>
					<Box className='sidebar-icon' />
					<span>Mahsulotlarni boshqarish</span>
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
