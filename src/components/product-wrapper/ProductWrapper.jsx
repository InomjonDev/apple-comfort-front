import { Product } from '../'

import './ProductWrapper.css'

function ProductWrapper({ data }) {
	return (
		<>
			<Product data={data} />
		</>
	)
}

export default ProductWrapper
