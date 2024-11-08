import { Product } from '../'

import './ProductWrapper.css'

function ProductWrapper({ data, loading, error, selectedCategory }) {
	const filteredData =
		selectedCategory === 'all'
			? data
			: data.filter(item => item.category === selectedCategory)
	return (
		<>
			<Product data={filteredData} loading={loading} error={error} />
		</>
	)
}

export default ProductWrapper
