import { Product } from '../'
import './ProductWrapper.css'

function ProductWrapper({
	data,
	loading,
	error,
	selectedCategory,
	isFavorites,
}) {
	const filteredData = isFavorites
		? data
		: selectedCategory === 'all'
		? data
		: data.filter(item => item.category === selectedCategory)

	return (
		<>
			<Product data={filteredData} loading={loading} error={error} />
		</>
	)
}

export default ProductWrapper
