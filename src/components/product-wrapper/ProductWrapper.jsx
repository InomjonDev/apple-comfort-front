import { Product } from '../'

import './ProductWrapper.css'

function ProductWrapper({ data, loading, error }) {
	return (
		<>
			<Product data={data} loading={loading} error={error} />
		</>
	)
}

export default ProductWrapper
