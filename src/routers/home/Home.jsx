import { Catalog, ProductWrapper } from '../../components/'

import useGetProducts from '../../hooks/useGetProducts'

function Home() {
	const { data, loading, error } = useGetProducts()

	console.log(data)

	return (
		<div>
			<Catalog />
			<ProductWrapper data={data} />
			{/* <Product /> */}
		</div>
	)
}

export default Home
