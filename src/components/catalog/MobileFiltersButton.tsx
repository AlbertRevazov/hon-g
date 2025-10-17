import React from 'react'

interface MobileFiltersButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const MobileFiltersButton: React.FC<MobileFiltersButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 transition-colors md:hidden"
    >
      <span className="font-medium">Фильтры</span>
      <svg
        className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}
