import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase'

export async function uploadImagesAndCreateProduct(product, images) {
	const productRef = collection(db, 'products')

	try {
		const imageUrls = await Promise.all(
			images.map(async file => {
				const storageRef = ref(storage, `products/${file.name}`)
				await uploadBytes(storageRef, file)
				const url = await getDownloadURL(storageRef)
				return url
			})
		)

		const newProduct = {
			title: product.title,
			desc: product.desc,
			category: product.category,
			quantity: product.quantity,
			price: product.price,
			imageUrls,
		}

		const res = await addDoc(productRef, newProduct)
		console.log('Product added:', res.id)
	} catch (error) {
		console.error('Error adding product:', error)
	}
}
