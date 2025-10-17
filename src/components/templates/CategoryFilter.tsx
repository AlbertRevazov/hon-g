import React from 'react'
import { TemplateCategory } from '../../types/template'
import { Card } from '../ui'

interface CategoryFilterProps {
  categories: TemplateCategory[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <Card padding="md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Категории шаблонов</h3>

      <div className="flex flex-col space-y-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`flex items-center px-3 py-2 rounded transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Все шаблоны
        </button>

        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center px-3 py-2 rounded transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </Card>
  )
}
