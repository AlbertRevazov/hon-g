import React, { useState } from 'react'
import { PageHeader, MobileFiltersButton, FiltersPanel, ContentPanel } from '../components/catalog'
import { templatesData, categoriesData } from '../data/templates'
import { Template } from '../types/template'

export const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const filteredTemplates = templatesData.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory

    if (!searchQuery.trim()) {
      return matchesCategory
    }

    const query = searchQuery.toLowerCase()
    const matchesSearch =
      template.name.toLowerCase().includes(query) ||
      template.description.toLowerCase().includes(query) ||
      template.features.some(feature => feature.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })

  const handleSelectTemplate = (template: Template) => {
    alert(`Шаблон "${template.name}" выбран!`)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="container mx-auto px-3 md:px-4">
        <PageHeader />

        <MobileFiltersButton isOpen={isFiltersOpen} onClick={toggleFilters} />

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <FiltersPanel
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            isMobileOpen={isFiltersOpen}
          />

          <ContentPanel
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            templates={filteredTemplates}
            onSelectTemplate={handleSelectTemplate}
          />
        </div>
      </div>
    </div>
  )
}
