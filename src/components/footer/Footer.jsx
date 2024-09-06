import { Instagram, Send } from 'lucide-react'

import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='left-section'>
					<p>©2024 UZB TECH SOLUTION</p>
				</div>
				<div className='center-section'>
					<span>
						<i>Apple Comfort</i>
					</span>
				</div>
				<div className='right-section'>
					<Send className='social-icon' />
					<Instagram className='social-icon' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
