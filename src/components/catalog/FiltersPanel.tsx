import React from 'react'
import { CategoryFilter } from '../templates'
import { TemplateCategory } from '../../types/template'

interface FiltersPanelProps {
  categories: TemplateCategory[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  isMobileOpen: boolean
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isMobileOpen,
}) => {
  return (
    <div className={`lg:w-1/4 ${isMobileOpen ? 'block' : 'hidden'} md:block`}>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  )
}
