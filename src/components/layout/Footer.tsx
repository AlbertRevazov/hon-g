import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-2">© 2024 RSVP Каталог Приглашений</p>
          <p className="text-gray-500 text-sm">
            Система управления приглашениями и подтверждениями участия
          </p>
        </div>
      </div>
    </footer>
  )
}
