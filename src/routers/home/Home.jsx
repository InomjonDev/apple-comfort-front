import { Catalog, ProductWrapper } from '../../components/'

import { productItems } from '../../static/product-item'

function Home() {
	return (
		<div>
			<Catalog />
			<ProductWrapper data={productItems} />
			{/* <Product /> */}
		</div>
	)
}

export default Home
