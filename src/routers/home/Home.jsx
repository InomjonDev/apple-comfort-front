import { useState } from 'react'
import { Catalog, ProductWrapper } from '../../components/'
import useGetProducts from '../../hooks/useGetProducts'

function Home() {
	const { data, loading, error } = useGetProducts()
	const [selectedCategory, setSelectedCategory] = useState('all')

	return (
		<div>
			<Catalog onSelectCategory={setSelectedCategory} />
			<ProductWrapper
				data={data}
				loading={loading}
				error={error}
				selectedCategory={selectedCategory}
			/>
		</div>
	)
}

export default Home
