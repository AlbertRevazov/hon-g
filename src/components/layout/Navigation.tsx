import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, NavItem } from '../../types/navigation'

interface NavigationProps {
  currentPath: string
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const isActive = (item: NavItem) => {
    return item.exact ? currentPath === item.path : currentPath.startsWith(item.path)
  }

  return (
    <nav className="flex space-x-6">
      {NAV_ITEMS.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive(item)
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
