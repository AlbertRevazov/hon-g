import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'popular'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    popular: 'bg-yellow-500 text-white',
  }

  return (
    <div
      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
