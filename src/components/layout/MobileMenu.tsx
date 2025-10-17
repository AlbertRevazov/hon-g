import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, NavItem } from '../../types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  currentPath: string
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, currentPath, onClose }) => {
  const isActive = (item: NavItem) => {
    return item.exact ? currentPath === item.path : currentPath.startsWith(item.path)
  }

  if (!isOpen) return null

  return (
    <div className="md:hidden py-4 border-t border-gray-200">
      <div className="flex flex-col space-y-3">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive(item)
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
            }`}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
