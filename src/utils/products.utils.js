export const formatPrice = price => {
	const numericPrice = typeof price === 'string' ? parseFloat(price) : price
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(numericPrice)
}
