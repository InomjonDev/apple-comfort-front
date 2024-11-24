import { useEffect, useRef, useState } from 'react'
import { scrollToTop } from '../../utils/scrollToTop'
import { uploadImagesAndCreateProduct } from '../../utils/upload-image.utils'
import AdminSidebar from './admin-sidebar/AdminSidebar'
import './Admin.css'

const initialState = {
	title: '',
	desc: '',
	category: '',
	quantity: 0,
	price: 0,
}

function Admin() {
	const [product, setProduct] = useState(initialState)
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(false)
	const fileInputRef = useRef(null)

	const handleChange = e => {
		const { name, value } = e.target
		setProduct(prevProduct => ({
			...prevProduct,
			[name]: value,
		}))
	}

	const handleImageChange = e => {
		const files = Array.from(e.target.files)
		setImages(files)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			await uploadImagesAndCreateProduct(product, images)
			setProduct(initialState)
			setImages([])
			if (fileInputRef.current) {
				fileInputRef.current.value = ''
			}
		} catch (error) {
			console.error('Error uploading product:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div className='admin-wrapper'>
			<AdminSidebar />
			<div className='admin-content'>
				<form className='product-form' onSubmit={handleSubmit}>
					<label>
						Mahsulot nomi:
						<input
							type='text'
							name='title'
							value={product.title}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Narxi:
						<input
							type='number'
							name='price'
							value={product.price}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Tavsifi:
						<textarea
							name='desc'
							value={product.desc}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Kategoriya:
						<input
							type='text'
							name='category'
							value={product.category}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Rasmlar:
						<input
							type='file'
							onChange={handleImageChange}
							multiple
							accept='image/*'
							ref={fileInputRef}
						/>
					</label>
					<button type='submit' className='submit-button' disabled={loading}>
						{loading ? 'Saving...' : "Maxsulot qo'shish"}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Admin
