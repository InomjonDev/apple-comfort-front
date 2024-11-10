export const handleNextImage = (currentIndex, imageUrlsLength) => {
	return currentIndex === imageUrlsLength - 1 ? 0 : currentIndex + 1
}

export const handlePreviousImage = (currentIndex, imageUrlsLength) => {
	return currentIndex === 0 ? imageUrlsLength - 1 : currentIndex - 1
}
