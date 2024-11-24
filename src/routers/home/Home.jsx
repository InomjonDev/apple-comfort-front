import { useEffect, useState } from 'react'
import { Catalog, ProductWrapper } from '../../components/'
import useGetProducts from '../../hooks/useGetProducts'
import { scrollToTop } from '../../utils/scrollToTop'

function Home() {
	const { data, loading, error } = useGetProducts()
	const [selectedCategory, setSelectedCategory] = useState('all')

	const handleSelectCategory = category => {
		setSelectedCategory(prevCategory =>
			prevCategory === category ? 'all' : category
		)
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<div>
			<Catalog
				onSelectCategory={handleSelectCategory}
				selectedCategory={selectedCategory}
			/>
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
