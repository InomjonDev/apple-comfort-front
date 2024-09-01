export const isFavorite = (favorites, itemId) => {
	return Array.isArray(favorites) && favorites.some(p => p._id === itemId)
}
