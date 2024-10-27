import { Catalog, ProductWrapper } from '../../components/'

import useGetProducts from '../../hooks/useGetProducts'

function Home() {
	const { data, loading, error } = useGetProducts()

	return (
		<div>
			<Catalog />
			<ProductWrapper data={data} loading={loading} error={error} />
			{/* <Product /> */}
		</div>
	)
}

export default Home
