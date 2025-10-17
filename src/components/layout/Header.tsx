import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Логотип и название */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span>RSVP Каталог</span>
          </Link>

          {/* Навигация */}
          <Navigation currentPath={location.pathname} />

          {/* Дополнительные элементы (можно добавить позже) */}
          <div className="w-8"></div>
        </div>
      </div>
    </header>
  )
}
