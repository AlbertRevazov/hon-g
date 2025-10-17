import React from 'react'
import { Input } from '../ui'

interface SearchSectionProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export const SearchSection: React.FC<SearchSectionProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-6">
      <Input placeholder="Поиск шаблонов..." value={searchQuery} onChange={onSearchChange} />
    </div>
  )
}
