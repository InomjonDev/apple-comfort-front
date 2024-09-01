import { catalogItems } from '../../static/catalog-items'
import './Catalog.css'

function Catalog() {
	return (
		<div className='catalog'>
			<ul className='catalog__list'>
				{catalogItems?.map(item => (
					<li className='catalog__item' key={item._id}>
						<a href={`#${item.catalog_id}`}>
							<img
								src={item.icon}
								alt={item.title}
								width={35}
								className='catalog__item-icon'
							/>
							<span className='catalog__item-title'>{item.title}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Catalog
