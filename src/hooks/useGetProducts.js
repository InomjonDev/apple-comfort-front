import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../server'

const useGetProducts = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productRef = collection(db, 'products')
				const snapshot = await getDocs(productRef)
				const products = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}))
				setData(products)
			} catch (error) {
				setError(error)
				console.error('Error fetching products:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	return { data, loading, error }
}

export default useGetProducts
