import { Contact, Heart, Home, MapPinned, ShoppingBag } from 'lucide-react'

export const sidebarItems = [
	{
		id: 'side-1',
		to: '/',
		text: 'Asosiy Sahifa',
		icon: Home,
	},
	{
		id: 'side-2',
		to: '/address',
		text: 'Filiallar',
		icon: MapPinned,
	},
	{
		id: 'side-3',
		to: '/contacts',
		text: 'Kontaktlar',
		icon: Contact,
	},
	{
		id: 'side-4',
		to: '/cart',
		text: 'Savat',
		icon: ShoppingBag,
	},
	{
		id: 'side-5',
		to: '/favorites',
		text: 'Sevimlilar',
		icon: Heart,
	},
]
