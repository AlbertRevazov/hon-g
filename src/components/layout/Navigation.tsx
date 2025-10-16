import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
	currentPath: string
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
	const navItems = [
		{ path: '/invitation/12', label: 'Приглашение', exact: true },
		{ path: '/rsvp/error', label: 'error', exact: true },
		{
			path: '/rsvp/success',
			label: 'success',
			exact: true,
		},
	]

	const isActive = (path: string, exact: boolean = false) => {
		return exact
			? currentPath === path
			: currentPath.startsWith(path)
	}

	return (
		<nav className='flex space-x-8'>
			{navItems.map(item => (
				<Link
					key={item.path}
					to={item.path}
					className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
						isActive(
							item.path,
							item.exact
						)
							? 'bg-blue-100 text-blue-700 border-b-2 border-blue-600'
							: 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
					}`}
				>
					{item.label}
				</Link>
			))}
		</nav>
	)
}
