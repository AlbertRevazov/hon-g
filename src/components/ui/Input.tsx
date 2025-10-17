import React from 'react'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  )
}
