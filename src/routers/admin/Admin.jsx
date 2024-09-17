import React, { useRef, useState } from 'react'
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

	return (
		<div className='admin-wrapper'>
			<AdminSidebar />
			<div className='admin-content'>
				<form className='product-form' onSubmit={handleSubmit}>
					<label>
						Product Name:
						<input
							type='text'
							name='title'
							value={product.title}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Price:
						<input
							type='number'
							name='price'
							value={product.price}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Description:
						<textarea
							name='desc'
							value={product.desc}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Category:
						<input
							type='text'
							name='category'
							value={product.category}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Quantity:
						<input
							type='number'
							name='quantity'
							value={product.quantity}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Images:
						<input
							type='file'
							onChange={handleImageChange}
							multiple
							accept='image/*'
							ref={fileInputRef}
						/>
					</label>
					<button type='submit' className='submit-button' disabled={loading}>
						{loading ? 'Saving...' : 'Add Product'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Admin
