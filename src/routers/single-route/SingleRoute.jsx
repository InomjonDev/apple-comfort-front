import { useLocation } from 'react-router-dom'
import './SingleRoute.css'

function SingleRoute() {
	const location = useLocation()
	const item = location.state.item

	console.log(item)

	return <div className='container'>SingleRoute</div>
}

export default SingleRoute
